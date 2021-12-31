import React, { useEffect, useContext } from "react";
import { useState } from "react/cjs/react.development";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import useKeyPress from "../../hooks/useKeyPress";
import styles from "../../styles/drumpad/Drumpad.module.scss";

const Drumpad = ({ name, padKey, sound, color, full }) => {
    const [clicked, setClicked] = useState(false);
    const { setSelectedDrum } = useContext(SelectedDrumContext);
    const keyPressed = useKeyPress(padKey);

    useEffect(() => {
        if (keyPressed) {
            //TRIGGER PAD
        }
    }, [keyPressed]);

    return (
        <div
            className={
                styles.Drumpad + " " + (clicked ? styles.DrumpadActive : "")
            }
            style={{ backgroundColor: color }}
            onClick={() => {
                setSelectedDrum({ full, padKey });
                //TRIGGER PAD
            }}
        >
            <span className={styles.DrumpadKey}>{padKey}</span>
            <span className={styles.DrumpadName}>{name}</span>
        </div>
    );
};

export default Drumpad;
