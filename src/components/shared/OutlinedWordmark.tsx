import { twMerge } from "tailwind-merge"

type OutlinedWordmarkProps = {
    text: string
    outlineClass?: string
    className?: string
}

const OutlinedWordmark = ({ outlineClass = "2px #171717", text, className }: OutlinedWordmarkProps) => {
    return (
        <span
            className={twMerge(
                "font-semibold tracking-[-0.06em] text-transparent uppercase",
                className
            )}
            style={{
                WebkitTextStroke: outlineClass,
            }}
        >
            {text}
        </span>
    )
}

export default OutlinedWordmark