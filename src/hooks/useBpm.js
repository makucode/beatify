import React from "react";

const useBpm = (defaultState = 120) => {
    const [state, setState] = React.useState(defaultState);

    const setBpm = (bpm) => {
        if (bpm > 200) setState(200);
        else if (bpm < 1) setState(1);
        else setState(bpm);
    };

    return [state, setBpm];
};

export default useBpm;
