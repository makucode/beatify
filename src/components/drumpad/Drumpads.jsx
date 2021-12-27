import React, { useEffect } from "react";
import styles from "../../styles/drumpad/Drumpads.module.scss";
import Drumpad from "./Drumpad";
import { colors } from "../../assets/colors";
import { pads } from "../../assets/drumpads";

const Drumpads = () => {
    return (
        <div className={styles.Drumpads}>
            <div className={styles.DrumpadsGrid}>
                {pads.map((pad) => (
                    <Drumpad
                        key={pad.padKey}
                        color={
                            colors[Math.floor(Math.random() * colors.length)]
                        }
                        {...pad}
                    />
                ))}
            </div>
        </div>
    );
};

export default Drumpads;
