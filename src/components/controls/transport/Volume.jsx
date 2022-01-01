import React, { useContext } from "react";
import Knob from "./Knob";
import { DrumTriggerContext } from "../../../contexts/DrumTriggerContext";
import styles from "../../../styles/controls/display/Volume.module.scss";

const Volume = () => {
    const { volume, setVolume } = useContext(DrumTriggerContext);
    return (
        <div className={styles.Volume}>
            <div className={styles.VolumeKnob}>
                <Knob volume={volume} setVolume={setVolume} />
            </div>
            <span className={styles.VolumeLabel}>Volume</span>
        </div>
    );
};

export default Volume;
