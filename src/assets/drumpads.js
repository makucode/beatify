import bass from "../assets/sounds/808.mp3";
import clap1 from "../assets/sounds/clap-1.mp3";
import clap2 from "../assets/sounds/clap-2.mp3";
import crash from "../assets/sounds/crash.mp3";
import hatclosed1 from "../assets/sounds/hatclosed-1.mp3";
import hatclosed2 from "../assets/sounds/hatclosed-2.mp3";
import hatopen1 from "../assets/sounds/hatopen-1.mp3";
import kick1 from "../assets/sounds/kick-1.mp3";
import kick2 from "../assets/sounds/kick-2.mp3";
import kick3 from "../assets/sounds/kick-3.mp3";
import kick4 from "../assets/sounds/kick-4.mp3";
import perc1 from "../assets/sounds/perc-1.mp3";
import perc2 from "../assets/sounds/perc-2.mp3";
import perc3 from "../assets/sounds/perc-3.mp3";
import snare1 from "../assets/sounds/snare-1.mp3";
import snare2 from "../assets/sounds/snare-2.mp3";

export const pads = [
    { name: "Kick", padKey: "1", sound: kick1 },
    { name: "Snare", padKey: "2", sound: snare1 },
    { name: "HiHat", padKey: "3", sound: hatclosed1 },
    { name: "HiHat", padKey: "4", sound: hatopen1 },
    { name: "Kick", padKey: "q", sound: kick2 },
    { name: "Snare", padKey: "w", sound: snare2 },
    { name: "HiHat", padKey: "e", sound: hatclosed2 },
    { name: "Crash", padKey: "r", sound: crash },
    { name: "Kick", padKey: "a", sound: kick3 },
    { name: "Clap", padKey: "s", sound: clap1 },
    { name: "Perc", padKey: "d", sound: perc1 },
    { name: "808", padKey: "f", sound: bass },
    { name: "Kick", padKey: "y", sound: kick4 },
    { name: "Clap", padKey: "x", sound: clap2 },
    { name: "Perc", padKey: "c", sound: perc2 },
    { name: "Perc", padKey: "v/z", sound: perc3 },
];
