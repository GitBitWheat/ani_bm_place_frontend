import PaletteColor from "./palettecolor";
import colors from "./colors.json";
import "./palette.css";

const Palette = ({ unlockUpdateAbility }) => {
    const colorDivs = colors.array.map((colorRow, rowIdx) =>
        colorRow.map((rgb, colIdx) =>
            <PaletteColor
                key={`row${rowIdx}col${colIdx}`}
                rgb={rgb}
                unlockUpdateAbility={unlockUpdateAbility}
            />
        )
    );

    return (
        <div className="game-palette">
            <div className="game-palette-row">{colorDivs[0]}</div>
            <div className="game-palette-row">{colorDivs[1]}</div>
            <div className="game-palette-row">{colorDivs[2]}</div>
        </div>
    );
};

export default Palette;