import { createContext, useContext, useEffect, useState } from "react";
import useBpm from "../hooks/useBpm";
import { DrumTriggerContext } from "./DrumTriggerContext";

export const SequencerContext = createContext();

export const SequencerProvider = ({ children }) => {
    // Tracks - "1" for active beat, 0 for inactive
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
    const { handleTrigger } = useContext(DrumTriggerContext);
    const [bpm, setBpm] = useBpm();

    const [intervalID, setIntervalID] = useState("");

    const play = () => {
        let pos = position;
        setIntervalID(
            setInterval(() => {
                let keys = [];
                for (let key in tracks) {
                    if (tracks[key][pos]) {
                        keys.push(key);
                    }
                }
                handleTrigger(keys);

                if (pos >= 15) pos = 0;
                else pos++;
                setPosition(pos);
            }, (1000 * 15) / bpm)
        );
    };

    // Plays when isPlaying changes to true, stops active loop if isPlaying changes to false
    useEffect(() => {
        if (isPlaying) play();
        else clearInterval(intervalID);
    }, [isPlaying]);

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
