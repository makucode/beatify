import React, { useContext } from "react";
import { SequencerContext } from "../../contexts/SequencerContext";
import styles from "../../styles/controls/Transport.module.scss";
import ChevronIcon from "../icons/ChevronIcon";
import Volume from "./transport/Volume";

const Transport = () => {
    const { setIsPlaying, setPosition } = useContext(SequencerContext);

    return (
        <div className={styles.Transport}>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={styles.TransportButton}
                    onClick={() => setIsPlaying(true)}
                >
                    <ChevronIcon />
                </button>
                <span className={styles.ButtonLabel}>Play</span>
            </div>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={styles.TransportButton}
                    onClick={() => setIsPlaying(false)}
                >
                    <ChevronIcon />
                </button>
                <span className={styles.ButtonLabel}>Pause</span>
            </div>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={styles.TransportButton}
                    onClick={() => {
                        setIsPlaying(false);
                        setPosition(0);
                    }}
                >
                    <ChevronIcon />
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
