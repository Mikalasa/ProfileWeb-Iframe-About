import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextFadeIn = ({ text }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 3 }}
            className="generate-text-box text-neutral-300 text-xl sm:text-2xl w-3/4 sm:w-2/3 md:w-1/2 font-bold text-center mt-10"
        >
            {text}
        </motion.div>
    );
};

function HobbieText() {
    const text = `Outside the realm of programming, I also have a deep fondness for 3D art, 
passionate about creating and rendering scenes from the imagination. 
Using technology to create beauty is a pursuit worth undertaking.`;
    return <TextFadeIn text={text} />;
}

export default HobbieText;
