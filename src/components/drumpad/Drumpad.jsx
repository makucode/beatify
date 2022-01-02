import React, { useEffect, useContext } from "react";
import { DrumTriggerContext } from "../../contexts/DrumTriggerContext";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import useKeyPress from "../../hooks/useKeyPress";
import styles from "../../styles/drumpad/Drumpad.module.scss";

const Drumpad = ({ name, padKey, delay, color, full }) => {
    const { setSelectedDrum } = useContext(SelectedDrumContext);
    const { drumTriggers, handleTrigger } = useContext(DrumTriggerContext);

    const clicked = drumTriggers[padKey].clicked;

    const keyPressed = useKeyPress(padKey);

    const handlePadTrigger = () => {
        handleTrigger([padKey]);
    };

    useEffect(() => {
        if (keyPressed) {
            handlePadTrigger();
        }
    }, [keyPressed]);

    return (
        <div
            className={
                styles.Drumpad + " " + (clicked ? styles.DrumpadActive : "")
            }
            style={{
                backgroundColor: color,
                transitionDelay: delay * 0.1 + 0.1 + "s",
            }}
            onClick={() => {
                setSelectedDrum({ full, padKey });
                handlePadTrigger();
            }}
        >
            <span className={styles.DrumpadKey}>{padKey}</span>
            <span className={styles.DrumpadName}>{name}</span>
        </div>
    );
};

export default Drumpad;
