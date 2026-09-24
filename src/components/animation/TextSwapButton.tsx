"use client";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

interface TextSwapButtonProps {
    text: string;
    className?: string;
    cursorSize?: number;
}

export default function TextSwapButton({
    text,
    className,
    cursorSize = 70,
}: TextSwapButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const words = text.split(" ");

    return (
        <motion.button
            type="button"
            data-cursor
            data-cursor-size={cursorSize}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial="rest"
            transition={{
                duration: 0.40,
            }}
            animate={isHovered ? "hover" : "rest"}
            whileHover={{
                border: 0,
                backgroundColor: "#000",
                color: "#fff",
            }}
            className={twMerge(
                "w-35 h-11 p-5 border overflow-hidden border-black rounded-full flex items-center justify-center text-center",
                className
            )}
        >
            <motion.div
                className={twMerge(
                    `flex min-w-0 items-center ${words.length > 1 ? "gap-1" : "gap-0"
                    }`
                )}
            >
                {words.map((word, index) => (
                    <span
                        key={`${word}-${index}`}
                        className="relative grid shrink-0 text-[105%]"
                    >
                        <motion.span
                            variants={{
                                rest: {
                                    y: "0%",
                                    transition: {
                                        duration: 0.45,
                                        delay: 0,
                                        ease: [0.76, 0, 0.24, 1],
                                    },
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
                            variants={{
                                rest: {
                                    y: "130%",
                                    transition: {
                                        duration: 0.6,
                                        delay: 0,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
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
        </motion.button>
    );
}