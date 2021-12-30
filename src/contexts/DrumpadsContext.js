import { createContext, useState } from "react";
import { pads } from "../assets/drumpads";

export const DrumpadsContext = createContext();

export const DrumpadsProvider = ({ children }) => {
    const [drumpads, setDrumpads] = useState(pads.map((pad) => ({ ...pad })));

    return (
        <DrumpadsContext.Provider value={{ drumpads, setDrumpads }}>
            {children}
        </DrumpadsContext.Provider>
    );
};
