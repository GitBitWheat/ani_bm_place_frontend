import { useState, createContext } from "react";

const defaultNumRows = 9;
const defaultNumCols = 25;
const defaultTimeoutSeconds = 90;
const isRunning = true;

export const GameSettingsContext = createContext(null);

export const GameSettingsContextProvider = ({ children }) => {
    const [conf, setConf] = useState({
        numRows: defaultNumRows,
        numCols: defaultNumCols,
        timeoutSeconds: defaultTimeoutSeconds,
    });
    const value = { conf, setConf, isRunning };

    return (
        <GameSettingsContext.Provider value={value}>
            {children}
        </GameSettingsContext.Provider>
    );
};

export default GameSettingsContext;