import React, { useContext, useEffect, useState } from "react";
import { SequencerContext } from "../../contexts/SequencerContext";
import useKeyPress from "../../hooks/useKeyPress";
import styles from "../../styles/controls/Transport.module.scss";
import PauseIcon from "../icons/PauseIcon";
import PlayIcon from "../icons/PlayIcon";
import StopIcon from "../icons/StopIcon";
import Volume from "./transport/Volume";

const Transport = () => {
    const { isPlaying, setIsPlaying, setPosition } =
        useContext(SequencerContext);
    const playPressed = useKeyPress(" ");

    const [isPlayPressed, setIsPlayPressed] = useState(false);
    const [isPausePressed, setIsPausePressed] = useState(false);

    useEffect(() => {
        if (playPressed) {
            spaceBtnTrigger(isPlaying);
            setIsPlaying(!isPlaying);
        }
    }, [playPressed, setIsPlaying]);

    const spaceBtnTrigger = (playing) => {
        playing ? setIsPausePressed(true) : setIsPlayPressed(true);
        setTimeout(() => {
            setIsPausePressed(false);
            setIsPlayPressed(false);
        }, 100);
    };

    return (
        <div className={styles.Transport}>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={
                        styles.TransportButton +
                        " " +
                        styles.Play +
                        " " +
                        (isPlayPressed ? styles.TransportTrigger : "")
                    }
                    onClick={() => setIsPlaying(true)}
                >
                    <PlayIcon />
                </button>
                <span className={styles.ButtonLabel}>Play</span>
            </div>
            <div className={styles.TransportButtonWrapper}>
                <button
                    className={
                        styles.TransportButton +
                        " " +
                        styles.Pause +
                        " " +
                        (isPausePressed ? styles.TransportTrigger : "")
                    }
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
            </div>
        </div>
    );
};

export default Transport;
