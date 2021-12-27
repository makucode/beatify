import { Arc, Knob, Pointer } from "rc-knob";
import React from "react";
import styles from "../../styles/controls/Transport.module.scss";
import ChevronIcon from "../icons/ChevronIcon";

const CustomPointer = ({ width }) => <rect r={width} />;

const Transport = () => {
    return (
        <div className={styles.Transport}>
            <button>
                <ChevronIcon />
            </button>
            <button></button>
            <button></button>
            <div className={styles.TransportVolume}>
                <Knob
                    size={80}
                    angleOffset={220}
                    angleRange={280}
                    min={0}
                    max={100}
                    onChange={(value) => console.log(value)}
                >
                    <Arc arcWidth={5} color="#e5e5e5" />
                    <Pointer
                        width={4}
                        height={30}
                        radius={10}
                        type="rect"
                        color="#e5e5e5"
                    />
                </Knob>
                <span>Volume</span>
            </div>
        </div>
    );
};

export default Transport;
