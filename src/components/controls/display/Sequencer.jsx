import React from "react";
import styles from "../../../styles/controls/display/Sequencer.module.scss";

const Sequencer = () => {
    const sequence = [
        "1",
        "",
        "",
        "",
        "1",
        "",
        "",
        "",
        "1",
        "",
        "",
        "",
        "1",
        "",
        "",
        "",
    ];

    return (
        <div className={styles.Sequencer}>
            {sequence.map((step, idx) => (
                <span
                    key={idx}
                    className={
                        styles.Step + " " + (!step ? "" : styles.StepActive)
                    }
                ></span>
            ))}
        </div>
    );
};

export default Sequencer;
