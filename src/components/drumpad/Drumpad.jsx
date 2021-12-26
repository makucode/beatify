import React, { useState } from "react";
import styles from "../../styles/drumpad/Drumpad.module.scss";

const Drumpad = ({ name, padKey, sound, color }) => {
    const [clicked, setClicked] = useState(false);

    const play = (e) => {
        console.log("KEY");
        setClicked(true);
        setTimeout(() => setClicked(false), 100);
    };

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
