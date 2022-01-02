import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent
            ) ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.platform
            )
        ) {
            setIsMobile(true);
        }
    }, []);

    return isMobile;
};

export default useIsMobile;
