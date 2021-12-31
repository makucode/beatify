import { createContext, useState } from "react";
import useSound from "use-sound";
import { pads } from "../assets/drumpads";

export const DrumTriggerContext = createContext();

export const DrumTriggerProvider = ({ children }) => {
    const [volume, setVolume] = useState(0.25);

    const [playKick1] = useSound(pads[0].sound, { volume });
    const [playSnare1] = useSound(pads[1].sound, { volume });
    const [playHatO1] = useSound(pads[2].sound, { volume });
    const [playHatC1] = useSound(pads[3].sound, { volume });
    const [playKick2] = useSound(pads[4].sound, { volume });
    const [playSnare2] = useSound(pads[5].sound, { volume });
    const [playHatO2] = useSound(pads[6].sound, { volume });
    const [playCrash] = useSound(pads[7].sound, { volume });
    const [playKick3] = useSound(pads[8].sound, { volume });
    const [playClap1] = useSound(pads[9].sound, { volume });
    const [playPerc1] = useSound(pads[10].sound, { volume });
    const [play808] = useSound(pads[11].sound, { volume });
    const [playKick4] = useSound(pads[12].sound, { volume });
    const [playClap2] = useSound(pads[13].sound, { volume });
    const [playPerc2] = useSound(pads[14].sound, { volume });
    const [playPerc3] = useSound(pads[15].sound, { volume });

    const [drumTriggers, setDrumTriggers] = useState({
        1: { clicked: false },
        2: { clicked: false },
        3: { clicked: false },
        4: { clicked: false },
        q: { clicked: false },
        w: { clicked: false },
        e: { clicked: false },
        r: { clicked: false },
        a: { clicked: false },
        s: { clicked: false },
        d: { clicked: false },
        f: { clicked: false },
        y: { clicked: false },
        x: { clicked: false },
        c: { clicked: false },
        v: { clicked: false },
    });

    const handleTrigger = (padKey) => {
        setDrumTriggers({ ...drumTriggers, [padKey]: { clicked: true } });
        switch (padKey) {
            case "1":
                playKick1();
                break;
            case "2":
                playSnare1();
                break;
            case "3":
                playHatO1();
                break;
            case "4":
                playHatC1();
                break;
            case "q":
                playKick2();
                break;
            case "w":
                playSnare2();
                break;
            case "e":
                playHatO2();
                break;
            case "r":
                playCrash();
                break;
            case "a":
                playKick3();
                break;
            case "s":
                playClap1();
                break;
            case "d":
                playPerc1();
                break;
            case "f":
                play808();
                break;
            case "y":
                playKick4();
                break;
            case "x":
                playClap2();
                break;
            case "c":
                playPerc2();
                break;
            case "v":
                playPerc3();
                break;
            default:
                break;
        }
        setTimeout(() => {
            setDrumTriggers({ ...drumTriggers, [padKey]: { clicked: false } });
        }, 100);
    };

    return (
        <DrumTriggerContext.Provider
            value={{ drumTriggers, handleTrigger, volume, setVolume }}
        >
            {children}
        </DrumTriggerContext.Provider>
    );
};
