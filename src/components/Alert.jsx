import React, { useState } from "react";
import styles from "../styles/Alert.module.scss";

const Alert = () => {
    const [close, setClose] = useState(false);

    return (
        <div className={styles.Alert + " " + (close ? styles.Hide : "")}>
            <div className={styles.AlertContent}>
                It appears you're trying to use beatify on a mobile device.
                Please note that most mobile browsers are unable provide all
                features of this app. We recommend using the website on a laptop
                or desktop computer.
                <button
                    className={styles.AlertButton}
                    onClick={() => setClose(true)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Alert;
