import React from "react";
import styles from "../../../styles/controls/credits/Credits.module.scss";
import GithubIcon from "../../icons/GitHubIcon";

const Credits = () => {
    return (
        <div className={styles.Credits}>
            <p>© makucode</p>
            <a
                href="https://github.com/makucode/beatify"
                target="_blank"
                rel="noreferrer"
            >
                <GithubIcon />
            </a>
        </div>
    );
};

export default Credits;
