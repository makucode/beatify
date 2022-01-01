import { useState } from "react";

const useVolume = (defaultState = 0.25) => {
    const [state, setState] = useState(defaultState);

    const setVolume = (volume) => {
        if (volume >= 1) setState(1);
        else if (volume <= 0.01) setState(0.01);
        else setState(volume);
    };

    return [state, setVolume];
};

export default useVolume;
