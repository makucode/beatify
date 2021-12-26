import React from "react";
import { colors } from "../../assets/colors";
import styles from "../../styles/drumpad/Drumpad.module.scss";

const Drumpad = ({ name, padKey, sound }) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className={styles.Drumpad} style={{ backgroundColor: color }}>
            <span className={styles.DrumpadKey}>{padKey}</span>
            <span className={styles.DrumpadName}>{name}</span>
        </div>
    );
};

export default Drumpad;
