import React, { useContext } from "react";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import { SequencerContext } from "../../contexts/SequencerContext";
import styles from "../../styles/controls/Reset.module.scss";

const Reset = () => {
    const { selectedDrum } = useContext(SelectedDrumContext);
    const { tracks, setTracks } = useContext(SequencerContext);

    const handleResetDrum = () => {
        setTracks({ ...tracks, [selectedDrum.padKey]: undefined });
    };

    return (
        <div className={styles.Reset}>
            <button className={styles.ResetButton} onClick={handleResetDrum}>
                Reset Drum
            </button>
            <button
                className={styles.ResetButton}
                onClick={() => setTracks({})}
            >
                Reset All
            </button>
        </div>
    );
};

export default Reset;
