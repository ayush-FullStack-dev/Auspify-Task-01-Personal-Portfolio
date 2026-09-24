import { twMerge } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface IconButtonProps {
    icon: LucideIcon;
    className?: string;
    cursorSize?: number;
    animateAllowed?: boolean;
}

export default function IconButton({
    icon: Icon,
    className,
    cursorSize = 65,
    animateAllowed = true,
}: IconButtonProps) {
    return (
        <motion.button
            type="button"
            data-cursor
            data-cursor-size={cursorSize}
            whileHover={
                animateAllowed
                    ? {
                          border: 0,
                          backgroundColor: "#000",
                          color: "#fff",
                      }
                    : undefined
            }
            transition={
                animateAllowed
                    ? {
                          duration: 0.4,
                      }
                    : undefined
            }
            className={twMerge(
                "text-center cursor-pointer flex items-center justify-center w-full aspect-square border rounded-full p-2 hover:bg-white",
                className
            )}
        >
            <Icon />
        </motion.button>
    );
}