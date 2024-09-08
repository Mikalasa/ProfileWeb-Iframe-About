import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariant = (delay) => {
    return {
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
                delay: delay,
            },
        },
    };
};
const TextFadeIn = ({ text }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    return (
        <div
            className="generate-text-box  text-neutral-300 text-x sm:text-2xl w-3/4 sm:w-2/3 md:w-1/2 font-bold text-start mt-10"
        >
            {text}
        </div>
    );
};

function HobbieText() {
    const text = `Outside the realm of programming, I also have a deep fondness for 3D art, 
passionate about creating and rendering scenes from the imagination. 
Using technology to create beauty is a pursuit worth undertaking.`;
    return <TextFadeIn text={text} />;
}

export default HobbieText;
