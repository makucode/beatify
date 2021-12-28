import React from "react";
import styles from "../../styles/controls/Transport.module.scss";
import ChevronIcon from "../icons/ChevronIcon";
import Volume from "./transport/Volume";

const Transport = () => {
    return (
        <div className={styles.Transport}>
            <button>
                <ChevronIcon />
            </button>
            <button></button>
            <button></button>
            <div className={styles.TransportVolume}>
                <Volume />
                <span>Volume</span>
            </div>
        </div>
    );
};

export default Transport;
