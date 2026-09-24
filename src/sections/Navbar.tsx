import { googleSans, googleSansFlex } from "@/assets/fonts/font.google"
import TextSwap from "@/components/animation/TextSwap"
import Image from "next/image"
import Link from "next/link"
import TextSwapButton from "@/components/animation/TextSwapButton"
import { FileText } from "lucide-react"
import IconButton from "@/components/shared/IconButton"

const Navbar = () => {
    return (
        <header className="relative z-99 h-20 w-full lg:h-22">
            <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:px-6 lg:max-w-[1600px] lg:px-8 xl:px-10">

                <Link
                    href="/"
                    data-cursor
                    data-cursor-size="60"
                    className="shrink-0"
                >
                    <Image
                        alt="Logo"
                        src="/brand/logo.svg"
                        width={600}
                        height={600}
                        className="
                            h-auto
                            w-24
                            transition-transform
                            duration-300
                            ease-out
                            hover:scale-104
                            sm:w-28
                            lg:w-40
                        "
                    />
                </Link>

                <nav
                    className={`
                        hidden
                        items-center
                        gap-8
                        text-lg
                        text-[#969393]
                        lg:flex
                        xl:gap-10
                        ${googleSansFlex.className}
                    `}
                >
                    <TextSwap text="Home" className="hover:text-black" />
                    <TextSwap text="About" className="hover:text-black" />
                    <TextSwap text="Projects" className="hover:text-black" />
                    <TextSwap text="Contact" className="hover:text-black" />
                </nav>

                <div
                    className={`
                        flex
                        shrink-0
                        items-center
                        justify-center
                        gap-3
                        sm:gap-4
                        lg:gap-5
                        ${googleSans.className}
                    `}
                >
                    <div className="w-11 sm:w-12 lg:w-13">
                        <IconButton icon={FileText} />
                    </div>

                    <TextSwapButton text="Let's Talk!" />
                </div>
            </div>
        </header>
    )
}

export default Navbar