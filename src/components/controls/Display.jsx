import React, { useContext } from "react";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import { SequencerContext } from "../../contexts/SequencerContext";
import useBpm from "../../hooks/useBpm";
import styles from "../../styles/controls/Display.module.scss";
import ChevronIcon from "../icons/ChevronIcon";
import Sequencer from "./display/Sequencer";

const Display = () => {
    const { bpm, setBpm } = useContext(SequencerContext);
    const { selectedDrum, setSelectedDrum } = useContext(SelectedDrumContext);

    return (
        <section className={styles.Display}>
            <div className={styles.DisplayBPM}>
                <span>BPM</span>
                <input
                    className={styles.BPM}
                    type="number"
                    min="1"
                    max="200"
                    value={bpm}
                    onChange={(e) => setBpm(e.target.value)}
                />
                <span className={styles.BpmIcons}>
                    <ChevronIcon onClick={() => setBpm(bpm + 1)} />
                    <ChevronIcon onClick={() => setBpm(bpm - 1)} />
                </span>
            </div>
            <span className={styles.DisplayDrum}>{selectedDrum.full}</span>
            <Sequencer />
        </section>
    );
};

export default Display;
