import React from "react";
import { DrumpadsProvider } from "../contexts/DrumpadsContext";
import { SelectedDrumProvider } from "../contexts/SelectedDrumContext";
import { SequencerProvider } from "../contexts/SequencerContext";

const Provider = ({ children }) => (
    <SequencerProvider>
        <DrumpadsProvider>
            <SelectedDrumProvider>{children}</SelectedDrumProvider>
        </DrumpadsProvider>
    </SequencerProvider>
);

export default Provider;
