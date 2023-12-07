import { useState, useEffect } from 'react';

const useDelayedFadeIn = (delay) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [delay]);

    return isVisible;
};

export default useDelayedFadeIn;