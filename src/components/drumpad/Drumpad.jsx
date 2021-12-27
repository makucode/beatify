import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import styles from "../../styles/drumpad/Drumpad.module.scss";

const Drumpad = ({ name, padKey, sound, color }) => {
    const [clicked, setClicked] = useState(false);

    const [playSound] = useSound(sound, { volume: 0.25 });

    const play = () => {
        playSound();
        setClicked(true);
        setTimeout(() => setClicked(false), 100);
    };

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (padKey.includes(e.key)) play();
        });
    }, [padKey]);

    return (
        <div
            className={
                styles.Drumpad + " " + (clicked ? styles.DrumpadActive : "")
            }
            style={{ backgroundColor: color }}
            onClick={play}
        >
            <span className={styles.DrumpadKey}>{padKey}</span>
            <span className={styles.DrumpadName}>{name}</span>
        </div>
    );
};

export default Drumpad;
