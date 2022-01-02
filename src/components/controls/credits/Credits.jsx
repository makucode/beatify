import React from "react";
import styles from "../../../styles/controls/credits/Credits.module.scss";
import GithubIcon from "../../icons/GitHubIcon";

const Credits = () => {
    const year = new Date().getFullYear();

    return (
        <div className={styles.Credits}>
            <p className={styles.CreditsCredits}>
                © {year}
                <a
                    href="https://makuco.de/imprint"
                    target="_blank"
                    rel="noreferrer"
                >
                    makucode
                </a>
            </p>
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
