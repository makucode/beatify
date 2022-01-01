import React, { useContext } from "react";
import { SequencerContext } from "../../../contexts/SequencerContext";
import styles from "../../../styles/controls/display/BPM.module.scss";
import ChevronIcon from "../../icons/ChevronIcon";

const BPM = () => {
    const { bpm, setBpm } = useContext(SequencerContext);

    return (
        <div className={styles.BPMWrapper}>
            <span>BPM</span>
            <input
                id="bpm"
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
    );
};

export default BPM;
