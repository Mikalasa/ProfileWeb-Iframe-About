"use client";
import React, { useEffect, useRef, useState } from 'react';
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Outside the realm of programming, I also have a deep fondness for 3D art, 
passionate about creating and rendering scenes from the imagination. 
Using technology to create beauty is a pursuit worth undertaking.`;

export function TextGenerateEffectPreview() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref}>
            {isVisible && <TextGenerateEffect words={words} />}
        </div>
    );
}
