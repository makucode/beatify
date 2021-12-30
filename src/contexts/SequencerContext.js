import { createContext, useEffect, useState } from "react";
import useBpm from "../hooks/useBpm";

export const SequencerContext = createContext();

export const SequencerProvider = ({ children }) => {
    const [tracks, setTracks] = useState({
        1: ["1", 0, 0, 0, "1", 0, 0, 0, "1", 0, 0, 0, "1", 0, 0, 0],
        2: [0, 0, 0, 0, "1", 0, 0, 0, 0, 0, 0, 0, "1", 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        q: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        w: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        e: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        r: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        a: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        s: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        d: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        f: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        c: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
    const [position, setPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [bpm, setBpm] = useBpm();

    const play = () => {
        if (tracks[1][position]) {
            window.dispatchEvent(
                new KeyboardEvent("keydown", {
                    key: "1",
                })
            );
        }
    };

    useEffect(() => {
        if (isPlaying) {
            play();
            setTimeout(() => {
                if (position >= 15) setPosition(0);
                else setPosition(position + 1);
            }, (1000 * 15) / bpm);
        }
    }, [position, isPlaying]);

    return (
        <SequencerContext.Provider
            value={{
                tracks,
                setTracks,
                position,
                setPosition,
                isPlaying,
                setIsPlaying,
                bpm,
                setBpm,
            }}
        >
            {children}
        </SequencerContext.Provider>
    );
};
