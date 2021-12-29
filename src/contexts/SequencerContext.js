import { createContext, useState } from "react";

export const SequencerContext = createContext();

export const SequencerProvider = ({ children }) => {
    const [tracks, setTracks] = useState({
        1: ["1", 0, 0, 0, "1", 0, 0, 0, "1", 0, 0, 0, "1", 0, 0, 0],
    });
    const [position, setPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <SequencerContext.Provider
            value={{
                tracks,
                setTracks,
                position,
                setPosition,
                isPlaying,
                setIsPlaying,
            }}
        >
            {children}
        </SequencerContext.Provider>
    );
};
