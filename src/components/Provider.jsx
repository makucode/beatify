import React from "react";
import { SelectedDrumProvider } from "../contexts/SelectedDrumContext";

const Provider = ({ children }) => (
    <SelectedDrumProvider>{children}</SelectedDrumProvider>
);

export default Provider;
