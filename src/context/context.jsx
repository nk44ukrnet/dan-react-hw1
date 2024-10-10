import {createContext, useState} from "react";

export const ContextFlexGrow = createContext({});

const ContextFlexGrowProvider = ({children}) => {
    const [flexGrow, setFlexGrow] = useState(false);

    function handleFlexGrowOn() {
        setFlexGrow(true);
    }
    function handleFlexGrowOff() {
        setFlexGrow(false);
    }

    return (
        <ContextFlexGrow.Provider value={{
            flexGrow,
            handleFlexGrowOn,
            handleFlexGrowOff,
        }}>
            {children}
        </ContextFlexGrow.Provider>
    )
}

export { ContextFlexGrowProvider };