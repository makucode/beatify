import React, { useState, useEffect, useContext } from "react";
import useSound from "use-sound";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import useKeyPress from "../../hooks/useKeyPress";
import styles from "../../styles/drumpad/Drumpad.module.scss";

const Drumpad = ({ name, padKey, sound, color, full }) => {
    const [clicked, setClicked] = useState(false);
    const { setSelectedDrum } = useContext(SelectedDrumContext);
    const keyPressed = useKeyPress(padKey);

    const [playSound] = useSound(sound, { volume: 0.25 });

    const play = () => {
        playSound();
        setClicked(true);
        console.log(padKey);
        setTimeout(() => setClicked(false), 100);
    };

    useEffect(() => {
        if (keyPressed) {
            play();
        }
    }, [keyPressed]);

    return (
        <div
            className={
                styles.Drumpad + " " + (clicked ? styles.DrumpadActive : "")
            }
            style={{ backgroundColor: color }}
            onClick={() => {
                play();
                setSelectedDrum({ full, padKey });
            }}
        >
            <span className={styles.DrumpadKey}>{padKey}</span>
            <span className={styles.DrumpadName}>{name}</span>
        </div>
    );
};

export default Drumpad;
