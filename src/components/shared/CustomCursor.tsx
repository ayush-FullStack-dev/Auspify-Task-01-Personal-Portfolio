"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

const CustomCursor = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {
        stiffness: 180,
        damping: 28,
        mass: 0.5,
    });
    const springY = useSpring(y, {
        stiffness: 180,
        damping: 28,
        mass: 0.5,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [x, y]);

    return (
        <motion.div
            className="fixed size-4 rounded-full bg-white mix-blend-difference top-0 left-0 z-999 pointer-events-none"
            style={{
                x: springX,
                y: springY,
            }}
        >
        </motion.div>
    );
};

export default CustomCursor;