import React, { useContext } from "react";
import { DrumTriggerContext } from "../../../contexts/DrumTriggerContext";
import styles from "../../../styles/controls/display/Volume.module.scss";

const Volume = () => {
    const { volume, setVolume } = useContext(DrumTriggerContext);
    const displayVolume = volume * 100 + "%";
    return (
        <div className={styles.Volume}>
            <div className={styles.VolumeKnob}>{displayVolume}</div>
            <span className={styles.VolumeLabel}>Volume</span>
        </div>
    );
};

export default Volume;
