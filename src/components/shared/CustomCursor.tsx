"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";
import { useEffect } from "react";

const DEFAULT_CURSOR_SIZE = 14;

const CustomCursor = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const size = useMotionValue(DEFAULT_CURSOR_SIZE);

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

    const springSize = useSpring(size, {
        stiffness: 300,
        damping: 25,
        mass: 0.4,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);

            const target = e.target as HTMLElement;

            const cursorElement =
                target.closest("[data-cursor]");

            const sizeValue =
                cursorElement?.getAttribute(
                    "data-cursor-size"
                );

            const cursorSize = sizeValue
                ? Number(sizeValue)
                : DEFAULT_CURSOR_SIZE;

            size.set(
                Number.isFinite(cursorSize)
                    ? cursorSize
                    : DEFAULT_CURSOR_SIZE
            );
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, [x, y, size]);

    return (
        <motion.div
            className="
                fixed
                top-0
                left-0
                z-888
                rounded-full
                bg-white
                mix-blend-difference
                pointer-events-none
            "
            style={{
                x: springX,
                y: springY,
                width: springSize,
                height: springSize,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
};

export default CustomCursor;