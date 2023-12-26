import { useState, useContext, useCallback } from "react";
import GameSettingsContext from "./contexts/gamesettingscontext";
import { useTimer } from "react-timer-hook";

/**
 * @typedef {Object} UserTimeoutState
 * @property {Binary} updateAllowed Can the user update a pixel or not
 * @property {Function} setUserTimeout Put the user in timeout
 * @property {Number} seconds Number of the seconds left in timeout modulo 60
 * @property {Number} minutes Number of the minutes left in timeout
 */

/**
 * @returns {UserTimeoutState}
 */
const useUserTimeout = (allowUpdate, unallowUpdate) => {
    const settings = useContext(GameSettingsContext);
    const conf = settings?.conf;
    const isRunning = settings?.isRunning;

    // Creates data object for the timer
    const generateTimestamp = useCallback(() =>
        (conf && isRunning) ?
        new Date((new Date()).getTime() + conf.timeoutSeconds * 1000) :
        console.error('Game timer timestamp generated while game is not running'),
        [conf, isRunning]
    );

    // Timer hook for user timeout
    const {
        seconds,
        minutes,
        restart,
        isRunning : isTimerRunning
    } = useTimer({
        expiryTimestamp: new Date(),
        autoStart: false,
        onExpire: () => {
            allowUpdate();
        }
    });

    // Set the user in timeout upon pixel update
    const setUserTimeout = useCallback(() => {
        if (isRunning && conf) {
            restart(generateTimestamp());
            unallowUpdate();
        } else {
            console.error('User timeout triggered while game is not running')
        }
    }, [isRunning, conf, restart, generateTimestamp, unallowUpdate]);

    return { setUserTimeout, seconds, minutes, isTimerRunning };
};

export default useUserTimeout;