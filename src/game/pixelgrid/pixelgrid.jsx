import { useState, useEffect, useContext } from "react";
import GameSettingsContext from "../contexts/gamesettingscontext";
import Pixel from "../pixel/pixel";
import "./pixelgrid.css";

const PixelGrid = ({ updateAllowed, onPixelUpdate : setUserTimeout }) => {
    const settings = useContext(GameSettingsContext);
    const conf = settings?.conf;
    const isRunning = settings?.isRunning;

    const [rows, setRows] = useState([]);
    useEffect(() => {
        if (conf && isRunning) {
            setRows(
                new Array(conf.numRows).fill(null)
                .map((_rowVal, rowIdx) =>
                    new Array(conf.numCols).fill(null)
                    .map((_colVal, colIdx) => rowIdx * conf.numCols + colIdx)
                    .map(index => (
                        <Pixel
                            key={index}
                            index={index}
                            updateAllowed={updateAllowed}
                            onClick={setUserTimeout}
                        />
                    ))
                )
            );
        } else {
            setRows([]);
        }
    }, [updateAllowed, setUserTimeout, conf, isRunning]);

    return settings ? (
        <div className="pixelgrid">
            {rows.map((cols, idx) => (
                <div
                    key={`row${idx}`}
                    className="pixelgrid-row"
                >
                    {cols}
                </div>
            ))}
        </div>
    ) : <></>;
};

export default PixelGrid;