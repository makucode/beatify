import React from "react";
import styles from "../styles/Maschine.module.scss";
import Controls from "./controls/Controls";
import Drumpads from "./drumpad/Drumpads";

const Maschine = () => {
    return (
        <main className={styles.Maschine}>
            <Controls />
            <Drumpads />
        </main>
    );
};

export default Maschine;
