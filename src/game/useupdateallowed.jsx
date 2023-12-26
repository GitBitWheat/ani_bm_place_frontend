import { useState, useEffect, useContext, useCallback } from "react";
import UserContext from "../meta/usercontext";

/** Binary state for if the user can update a pixel or not */
const useUpdateAllowed = () => {
    const [twoDirectionLock, setTwoDirectionLock] = useState(false);
    const [oneDirectionLock, setOneDirectionLock] = useState(true);

    const unlockUpdateAbility = useCallback(() => {
        setOneDirectionLock(false);
    }, []);

    const allowUpdate = useCallback(() => {
        if (!oneDirectionLock) {
            setTwoDirectionLock(false)
        }
    }, [oneDirectionLock]);
    const unallowUpdate = useCallback(() => {
        if (!oneDirectionLock) {
            setTwoDirectionLock(true)
        }
    }, [oneDirectionLock]);

    const user = useContext(UserContext);
    const [updateAllowed, setUpdateAllowed] = useState(false);
    useEffect(() => {
        setUpdateAllowed(!oneDirectionLock && !twoDirectionLock && user);
    }, [oneDirectionLock, twoDirectionLock, user]);

    return { updateAllowed, allowUpdate, unallowUpdate, unlockUpdateAbility };
};

export default useUpdateAllowed;