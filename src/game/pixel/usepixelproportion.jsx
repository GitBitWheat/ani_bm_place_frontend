import { useState, useEffect, useContext } from "react";
import GameSettingsContext from "../contexts/gamesettingscontext";

const usePixelProportion = () => {
    const settings = useContext(GameSettingsContext);
    const conf = settings?.conf;
    const isRunning = settings?.isRunning;

    const [proportion, setProportion] = useState(null);
    useEffect(() => {
        if (conf && isRunning) {
            setProportion(`${window.innerWidth / conf.numCols}px`);
        }
    }, [conf, isRunning]);

    return proportion;
};

export default usePixelProportion;