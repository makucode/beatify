import React, { useEffect, useState } from "react";
import styles from "../../styles/drumpad/Drumpads.module.scss";
import Drumpad from "./Drumpad";
import { colors } from "../../assets/colors";
import { pads } from "../../assets/drumpads";

const Drumpads = () => {
    const [colorSequence, setColorSequence] = useState([]);

    const genColors = () => {
        let newSequence = [];

        while (newSequence.length < 4) {
            const newColor = colors[Math.floor(Math.random() * colors.length)];
            let duplicate = false;
            for (let color of newSequence) {
                if (color === newColor) {
                    duplicate = true;
                    break;
                }
            }
            if (duplicate) continue;
            newSequence.push(newColor);
        }

        return newSequence;
    };

    useEffect(() => {
        setColorSequence(genColors());
    }, []);

    return (
        <div className={styles.Drumpads}>
            <div className={styles.DrumpadsGrid}>
                {pads.map((pad, idx) => (
                    <Drumpad
                        key={pad.padKey}
                        color={colorSequence[Math.floor(idx / 4)]}
                        delay={idx}
                        {...pad}
                    />
                ))}
            </div>
        </div>
    );
};

export default Drumpads;
