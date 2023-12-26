import PixelGrid from "./pixelgrid/pixelgrid"
import Palette from "./palette/palette";
import Timer from "./timer/timer";
import useUserTimeout from "./useusertimeout";
import useUpdateAllowed from "./useupdateallowed";
import { GameSettingsContextProvider } from "./contexts/gamesettingscontext";
import { SelectedColorContextProvider } from "./contexts/selectedcolorcontext";

const ProvidedGame = () => {
    const { updateAllowed, allowUpdate, unallowUpdate, unlockUpdateAbility } =
        useUpdateAllowed();
    const { setUserTimeout, seconds, minutes, isTimerRunning } =
        useUserTimeout(allowUpdate, unallowUpdate);
    
    return <>
        <PixelGrid
            updateAllowed={updateAllowed}
            onPixelUpdate={setUserTimeout}
        />
        <Palette
            unlockUpdateAbility={unlockUpdateAbility}
        />
        <Timer
            seconds={seconds}
            minutes={minutes}
            isTimerRunning={isTimerRunning}
        />
    </>;
};

const Game = () => {
    return (
        <GameSettingsContextProvider>
        <SelectedColorContextProvider>
            <ProvidedGame/>
        </SelectedColorContextProvider>
        </GameSettingsContextProvider>
    );
};

export default Game;