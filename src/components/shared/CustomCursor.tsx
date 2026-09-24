"use client";

import {
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

const DEFAULT_CURSOR_SIZE = 14;

const CustomCursor = () => {
    const [hasMouseMoved, setHasMouseMoved] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const opacity = useMotionValue(0);
    const size = useMotionValue(DEFAULT_CURSOR_SIZE);

    const entryX = useSpring(x, {
        stiffness: 70,
        damping: 22,
        mass: 0.8,
    });

    const entryY = useSpring(y, {
        stiffness: 70,
        damping: 22,
        mass: 0.8,
    });

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
        stiffness: 100,
        damping: 30,
        mass: 0.4,
    });

    const springOpacity = useSpring(opacity, {
        stiffness: 120,
        damping: 20,
        mass: 0.5,
    });

    useEffect(() => {
        x.set(window.innerWidth / 2);
        y.set(window.innerHeight / 2);

        const handleMouseMove = (e: MouseEvent) => {
            if (!hasMouseMoved) {
                setHasMouseMoved(true);
                opacity.set(1);
            }

            x.set(e.clientX);
            y.set(e.clientY);

            const target = e.target as HTMLElement;
            const cursorElement = target.closest("[data-cursor]");

            const sizeValue =
                cursorElement?.getAttribute("data-cursor-size");

            const cursorSize = sizeValue
                ? Number(sizeValue)
                : DEFAULT_CURSOR_SIZE;

            size.set(
                Number.isFinite(cursorSize)
                    ? cursorSize
                    : DEFAULT_CURSOR_SIZE
            );
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [hasMouseMoved, x, y, opacity, size]);

    return (
        <motion.div
            className="
                fixed
                top-0
                left-0
                z-9999
                rounded-full
                bg-white
                mix-blend-difference
                pointer-events-none
            "
            style={{
                x: hasMouseMoved ? springX : entryX,
                y: hasMouseMoved ? springY : entryY,
                opacity: springOpacity,
                width: springSize,
                height: springSize,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
};

export default CustomCursor;