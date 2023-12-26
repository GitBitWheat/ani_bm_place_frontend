import { useState, useEffect } from "react";

const max = (a, b) => a > b ? a : b;

const useCoordsOnHover = () => {
    const [isHoverPixel, setIsHoverPixel] = useState(false);
    const [isHoverPlacerBox, setIsHoverPlacer] = useState(false);
    const [coords, setCoords] = useState(null);

    /** @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event */
    const onMouseEnterPixel = event => {
        if (coords === null) {
            const rect = event.currentTarget.getBoundingClientRect();
            setCoords({
                left: rect.left,
                top: max(rect.top - 23, 0)
            });
        }
        setIsHoverPixel(true);
        console.log('enter pixel')
    };
    const onMouseLeavePixel = _event => {
        setIsHoverPixel(false);
        console.log('leave pixel')
    };

    const onMouseEnterPlacerBox = _event => {
        setIsHoverPlacer(true);
        console.log('enter placer box')
    };
    const onMouseLeavePlacerBox = _event => {
        setIsHoverPlacer(false);
        console.log('leave placer box')
    };

    const [showPlacer, setShowPlacer] = useState(false);
    useEffect(() => {
        setShowPlacer(isHoverPixel || isHoverPlacerBox);
    }, [isHoverPixel, isHoverPlacerBox]);

    return { showPlacer, coords, onMouseEnterPixel, onMouseLeavePixel,
        onMouseEnterPlacerBox, onMouseLeavePlacerBox };
};

export default useCoordsOnHover;