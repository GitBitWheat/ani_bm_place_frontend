import { useState, useEffect } from "react";

// Coords is an object with left and top properties
const PlacerBox = ({ pixelIndex, hidden=true, coords, onMouseEnter, onMouseLeave }) => {
    const [placer, setPlacer] = useState(null);
    useEffect(() => {
        setPlacer('placer');
    }, []);

    return (!hidden && placer) ? (
        <div
            className="placer-box"
            hidden={hidden}
            style={coords}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {'u/' + placer}
        </div>
    ) : null;
};

export default PlacerBox;