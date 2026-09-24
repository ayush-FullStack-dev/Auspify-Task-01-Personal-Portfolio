import { twMerge } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";

import { motion } from "motion/react";

interface IconButtonProps {
    icon: LucideIcon;
    className?: string;
    cursorSize?: number;
}

export default function IconButton({
    icon: Icon,
    className,
    cursorSize = 65
}: IconButtonProps) {
    return (
        <motion.button
            type="button"
            data-cursor
            data-cursor-size={cursorSize}
            transition={{
                duration: 0.40,
            }}
            whileHover={{
                border: 0,
                backgroundColor: "#000",
                color: "#fff",
            }}
            className={twMerge(
                "text-center flex items-center justify-center w-full aspect-square border rounded-full p-2 hover:bg-white",
                className
            )}
        >
            <Icon />
        </motion.button>
    );
}