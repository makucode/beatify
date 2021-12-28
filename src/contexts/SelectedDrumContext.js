import { createContext, useState } from "react";

export const SelectedDrumContext = createContext();

export const SelectedDrumProvider = ({ children }) => {
    const [selectedDrum, setSelectedDrum] = useState({
        full: "Kick 1",
        padKey: "1",
    });

    return (
        <SelectedDrumContext.Provider value={{ selectedDrum, setSelectedDrum }}>
            {children}
        </SelectedDrumContext.Provider>
    );
};
