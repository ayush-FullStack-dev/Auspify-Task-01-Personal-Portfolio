"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
    motion,
    useMotionTemplate,
    useSpring,
} from "motion/react";

type RevealPortraitProps = {
    graySrc: string;
    colorSrc: string;
    allowAnimation?: boolean;
    className?: string;
};

const RevealPortrait = ({
    graySrc,
    colorSrc,
    allowAnimation = true,
    className,
}: RevealPortraitProps) => {
    const mouseX = useSpring(0, {
        stiffness: 500,
        damping: 45,
        mass: 0.35,
    });

    const mouseY = useSpring(0, {
        stiffness: 500,
        damping: 45,
        mass: 0.35,
    });

    const maskImage = useMotionTemplate`
        radial-gradient(
            200px 140px at ${mouseX}px ${mouseY}px,
            black 0%,
            black 55%,
            transparent 100%
        )
    `;

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            className={twMerge(
                "relative h-full w-full select-none",
                className
            )}
            onMouseMove={allowAnimation ? handleMouseMove : undefined}
        >

            <Image
                src={graySrc}
                alt="Portrait"
                width={800}
                height={800}
                draggable={false}
                className="h-full w-full object-contain"
            />

            {allowAnimation && (
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                        maskImage,
                        WebkitMaskImage: maskImage,
                    }}
                >
                    <Image
                        src={colorSrc}
                        alt=""
                        width={800}
                        height={800}
                        loading="eager"
                        draggable={false}
                        className="h-full w-full object-contain"
                    />
                </motion.div>
            )}
        </div>
    );
};

export default RevealPortrait;