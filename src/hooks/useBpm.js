import { useState } from "react";

const useBpm = (defaultState = 120) => {
    const [state, setState] = useState(defaultState);

    const setBpm = (bpm) => {
        bpm = Math.floor(bpm) * 1;
        if (bpm > 200) return setState(200);
        else if (bpm <= 0) return setState(1);
        setState(bpm);
    };

    return [state, setBpm];
};

export default useBpm;
