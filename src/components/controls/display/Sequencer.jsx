import React, { useContext } from "react";
import { SelectedDrumContext } from "../../../contexts/SelectedDrumContext";
import { SequencerContext } from "../../../contexts/SequencerContext";
import styles from "../../../styles/controls/display/Sequencer.module.scss";

const Sequencer = () => {
    const { selectedDrum } = useContext(SelectedDrumContext);
    const { tracks, setTracks, position, isPlaying } =
        useContext(SequencerContext);
    const sequence = tracks[selectedDrum.padKey] || [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    const handleStepClick = (idx) => {
        const newSequence = sequence;
        newSequence[idx] = newSequence[idx] === 0 ? 1 : 0;
        setTracks({
            ...tracks,
            [selectedDrum.padKey]: newSequence,
        });
    };

    return (
        <div className={styles.Sequencer}>
            <div className={styles.SequencerPointer}>
                {sequence.map((track, idx) => (
                    <span
                        key={idx}
                        className={
                            styles.PointerStep +
                            " " +
                            (idx % 4 !== 0 ? "" : styles.FirstBeat) +
                            " " +
                            (idx === position && (isPlaying || position !== 0)
                                ? styles.PointerStepActive
                                : "")
                        }
                    ></span>
                ))}
            </div>
            <div className={styles.SequencerSequence}>
                {sequence.map((step, idx) => (
                    <span
                        key={idx}
                        className={
                            styles.Step + " " + (!step ? "" : styles.StepActive)
                        }
                        onClick={() => handleStepClick(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Sequencer;
