import React from "react";
import { DrumTriggerProvider } from "../contexts/DrumTriggerContext";
import { SelectedDrumProvider } from "../contexts/SelectedDrumContext";
import { SequencerProvider } from "../contexts/SequencerContext";

const Provider = ({ children }) => (
    <DrumTriggerProvider>
        <SequencerProvider>
            <SelectedDrumProvider>{children}</SelectedDrumProvider>
        </SequencerProvider>
    </DrumTriggerProvider>
);

export default Provider;
