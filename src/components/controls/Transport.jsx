import React, { useContext } from "react";
import { SequencerContext } from "../../contexts/SequencerContext";
import styles from "../../styles/controls/Transport.module.scss";
import PauseIcon from "../icons/PauseIcon";
import PlayIcon from "../icons/PlayIcon";
import StopIcon from "../icons/StopIcon";
import Volume from "./transport/Volume";

const Transport = () => {
    const { setIsPlaying, setPosition } = useContext(SequencerContext);

    return (
        <div className={styles.Transport}>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={styles.TransportButton + " " + styles.Play}
                    onClick={() => setIsPlaying(true)}
                >
                    <PlayIcon />
                </button>
                <span className={styles.ButtonLabel}>Play</span>
            </div>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={styles.TransportButton + " " + styles.Pause}
                    onClick={() => setIsPlaying(false)}
                >
                    <PauseIcon />
                </button>
                <span className={styles.ButtonLabel}>Pause</span>
            </div>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={styles.TransportButton + " " + styles.Stop}
                    onClick={() => {
                        setIsPlaying(false);
                        setPosition(0);
                    }}
                >
                    <StopIcon />
                </button>
                <span className={styles.ButtonLabel}>Stop</span>
            </div>
            <div className={styles.TransportVolume}>
                <Volume />
                <span>Volume</span>
            </div>
        </div>
    );
};

export default Transport;
