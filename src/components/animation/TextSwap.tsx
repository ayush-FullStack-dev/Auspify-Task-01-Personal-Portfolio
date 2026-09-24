"use client";

import { motion, useAnimationControls } from "motion/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

type TextSwapProps = {
    text: string;
    className?: string;
    animateAllowed?: boolean;
    isWord?: boolean
};

const TextSwap = ({
    text,
    className,
    animateAllowed = true,
    isWord = false
}: TextSwapProps) => {
    const words = text.split(isWord ? " " : "");
    const controls = useAnimationControls();
    const isAnimating = useRef(false);

    const handleHover = async () => {
        if (!animateAllowed) return;

        if (isAnimating.current) {
            await controls.stop();
        }

        isAnimating.current = true;

        controls.set("rest");

        await new Promise<void>((resolve) => {
            requestAnimationFrame(() => resolve());
        });

        await controls.start("hover");

        isAnimating.current = false;
    };

    return (
        <motion.div
            onHoverStart={handleHover}
            data-cursor
            data-cursor-size="60"
            initial="rest"
            className={twMerge(
                `flex min-w-0 items-center ${isWord ? "gap-1" : "gap-0"} overflow-hidden`,
                className
            )}
        >
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="relative grid shrink-0 overflow-hidden"
                >
                    <motion.span
                        initial={{ y: "0%" }}
                        animate={controls}
                        variants={{
                            rest: {
                                y: "0%",
                            },
                            hover: {
                                y: "-130%",
                                transition: {
                                    duration: 0.45,
                                    delay: index * 0.055,
                                    ease: [0.76, 0, 0.24, 1],
                                },
                            },
                        }}
                        className="col-start-1 row-start-1"
                    >
                        {word}
                    </motion.span>

                    <motion.span
                        initial={{ y: "130%" }}
                        animate={controls}
                        variants={{
                            rest: {
                                y: "130%",
                            },
                            hover: {
                                y: "0%",
                                transition: {
                                    duration: 0.6,
                                    delay: 0.45 + index * 0.055,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="col-start-1 row-start-1"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

export default TextSwap;