import React, { useRef, useEffect } from 'react';

export const getDimensions = (screen) => {
    const screenRef = useRef({width: 0, height: 0});

    useEffect(() => {
        screenRef.current.height = screen.current.offsetHeight;
        screenRef.current.width = screen.current.offsetWidth;
    }, []);

    return screenRef.current;
};