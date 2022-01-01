import React, { useContext } from "react";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import styles from "../../styles/controls/Display.module.scss";
import BPM from "./display/BPM";
import Sequencer from "./display/Sequencer";

const Display = () => {
    const { selectedDrum } = useContext(SelectedDrumContext);

    return (
        <section className={styles.Display}>
            <BPM />
            <span className={styles.DisplayDrum}>{selectedDrum.full}</span>
            <Sequencer />
        </section>
    );
};

export default Display;
