import React from "react";
import styles from "../../styles/drumpad/Drumpads.module.scss";
import Drumpad from "./Drumpad";
import { pads } from "../../assets/drumpads";

const Drumpads = () => {
    return (
        <div className={styles.Drumpads}>
            <div className={styles.DrumpadsGrid}>
                {pads.map((pad) => (
                    <Drumpad key={pad.padKey} {...pad} />
                ))}
            </div>
        </div>
    );
};

export default Drumpads;
