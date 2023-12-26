import { useState, useContext } from "react";
import PlacerBox from "./placerbox";
import SelectedColorContext from "../contexts/selectedcolorcontext";
import usePixelProportion from "./usepixelproportion";
import useCoordsOnHover from "./usecoordsonhover";
import "./pixel.css";

const Pixel = ({ index, updateAllowed, onClick : onClickProp }) => {
    const selectedColorCtx = useContext(SelectedColorContext);
    const [rgb, setRgb] = useState("#ffffff");

    const changeColor = () => {
        if (selectedColorCtx.selectedColor) {
            setRgb(selectedColorCtx.selectedColor);
        } else {
            setRgb('#ffffff');
        };
    };

    const onClick = _event => {
        if (updateAllowed) {
            changeColor();
            onClickProp();
        }
    };

    const proportion = usePixelProportion();
    const proportionStyle = { width: proportion, height: proportion };

    const className = "pixel-element" + (updateAllowed ? " pixel-element-update-allowed" : "");

    const { showPlacer, coords, onMouseEnterPixel, onMouseLeavePixel,
        onMouseEnterPlacerBox, onMouseLeavePlacerBox } = useCoordsOnHover();

    return <>
        <div
            className={className}
            style={{ ...proportionStyle, backgroundColor: rgb }}
            onClick={onClick}
            onMouseEnter={onMouseEnterPixel}
            onMouseLeave={onMouseLeavePixel}
        />
        <PlacerBox
            hidden={!showPlacer}
            coords={coords}
            pixelIndex={index}
            onMouseEnter={onMouseEnterPlacerBox}
            onMouseLeave={onMouseLeavePlacerBox}
        />
    </>;
};

export default Pixel;