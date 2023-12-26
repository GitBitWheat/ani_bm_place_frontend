import { useContext } from "react";
import UserContext from "../usercontext";
import "./metabox.css";
import text from "./metaboxtext.json";

const MetaBox = () => {
    const user = useContext(UserContext);
    
    return (
        <div className="meta-box">
            <h1>{text?.title}</h1>
            {user ? (
                <h2>
                    <span>u/{user.name}</span>
                    <button>{text.logout}</button>
                </h2>
            ) :
                null
            }
        </div>
    );
};

export default MetaBox;