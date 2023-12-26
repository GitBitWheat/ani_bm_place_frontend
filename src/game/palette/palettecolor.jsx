import { useContext } from "react";
import SelectedColorContext from "../contexts/selectedcolorcontext";

const PaletteColor = ({ rgb, unlockUpdateAbility }) => {
    const selectedColorCtx = useContext(SelectedColorContext);

    const className = rgb === selectedColorCtx?.selectedColor ?
        "game-palette-color game-palette-selected-color" : "game-palette-color";

    const selectColor = _event => {
        const setSelectedColor = selectedColorCtx?.setSelectedColor;
        if (setSelectedColor) {
            setSelectedColor(rgb);
            unlockUpdateAbility();
        } else {
            console.error('Color selection from palette is undefined');
        }
    };

    return (
        <div
            className={className}
            style={{ backgroundColor: rgb }}
            onClick={selectColor}
        />
    )
};

export default PaletteColor;