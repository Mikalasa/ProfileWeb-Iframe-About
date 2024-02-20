import React from 'react';
import { useInView } from 'react-intersection-observer';
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Outside the realm of programming, I also have a deep fondness for 3D art, 
passionate about creating and rendering scenes from the imagination. 
Using technology to create beauty is a pursuit worth undertaking.`;

export function TextGenerateEffectPreview() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref}>
            {inView && <TextGenerateEffect words={words} />}
        </div>
    );
}
