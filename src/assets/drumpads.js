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
    { name: "Kick", full: "Kick 1", padKey: "1", sound: kick1 },
    { name: "Snare", full: "Snare 1", padKey: "2", sound: snare1 },
    { name: "HiHat", full: "HiHat Closed 1", padKey: "3", sound: hatclosed1 },
    { name: "HiHat", full: "HiHat Open 1", padKey: "4", sound: hatopen1 },
    { name: "Kick", full: "Kick 2", padKey: "q", sound: kick2 },
    { name: "Snare", full: "Snare 2", padKey: "w", sound: snare2 },
    { name: "HiHat", full: "HiHat Open 2", padKey: "e", sound: hatclosed2 },
    { name: "Crash", full: "Crash", padKey: "r", sound: crash },
    { name: "Kick", full: "Kick 3", padKey: "a", sound: kick3 },
    { name: "Clap", full: "Clap 1", padKey: "s", sound: clap1 },
    { name: "Perc", full: "Percussion 1", padKey: "d", sound: perc1 },
    { name: "808", full: "808 Bass", padKey: "f", sound: bass },
    { name: "Kick", full: "Kick 4", padKey: "y", sound: kick4 },
    { name: "Clap", full: "Clap 2", padKey: "x", sound: clap2 },
    { name: "Perc", full: "Percussion 2", padKey: "c", sound: perc2 },
    { name: "Perc", full: "Percussion 3", padKey: "v/z", sound: perc3 },
];
