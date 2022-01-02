import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { fadeIn } from "../../assets/animations";
import { SelectedDrumContext } from "../../contexts/SelectedDrumContext";
import styles from "../../styles/controls/Display.module.scss";
import BPM from "./display/BPM";
import Sequencer from "./display/Sequencer";

const Display = () => {
    const { selectedDrum } = useContext(SelectedDrumContext);

    const animations = fadeIn;

    return (
        <section className={styles.Display}>
            <BPM />
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={selectedDrum.padKey}
                    transition={{ duration: 0.25 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animations}
                >
                    <span className={styles.DisplayDrum}>
                        {selectedDrum.full}
                    </span>
                </motion.div>
            </AnimatePresence>
            <Sequencer />
        </section>
    );
};

export default Display;
