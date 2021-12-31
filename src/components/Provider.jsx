import React from "react";
import { SelectedDrumProvider } from "../contexts/SelectedDrumContext";
import { SequencerProvider } from "../contexts/SequencerContext";

const Provider = ({ children }) => (
    <SequencerProvider>
        <SelectedDrumProvider>{children}</SelectedDrumProvider>
    </SequencerProvider>
);

export default Provider;
