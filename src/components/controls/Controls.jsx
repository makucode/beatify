import React from "react";
import styles from "../../styles/controls/Controls.module.scss";
import Display from "./Display";
import Reset from "./Reset";
import Transport from "./Transport";

const Controls = () => {
    return (
        <div className={styles.Controls}>
            <Display />
            <Transport />
            <Reset />
        </div>
    );
};

export default Controls;
