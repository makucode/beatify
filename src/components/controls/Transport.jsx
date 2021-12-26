import React from "react";
import styles from "../../styles/controls/Transport.module.scss";
import ChevronIcon from "../icons/ChevronIcon";

const Transport = () => {
    return (
        <div className={styles.Transport}>
            <button>
                <ChevronIcon />
            </button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    );
};

export default Transport;
