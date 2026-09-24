"use client"
import { googleSans, googleSansFlex } from "@/assets/fonts/font.google"
import TextSwap from "@/components/animation/TextSwap"
import Image from "next/image"
import Link from "next/link"
import TextSwapButton from "@/components/animation/TextSwapButton"
import { FileText } from "lucide-react"
import IconButton from "@/components/shared/IconButton"
import { navItems } from "@/constants/constants"

type NavbarProps = {
    isDesktop: boolean
    activeSection: string
}


const Navbar = ({ isDesktop, activeSection }: NavbarProps) => {
    return (
        <header className="relative z-99 h-20 w-full lg:h-22">
            <div className="mx-auto flex h-full w-full items-center justify-between px-0 xs:px-4 sm:px-6 lg:max-w-[1600px] lg:px-8 xl:px-10">

                <Link
                    href="/"
                    data-cursor
                    data-cursor-size="70"
                    className="shrink-0 cursor-pointer"
                >
                    <Image
                        alt="Logo"
                        src="/brand/logo.svg"
                        width={600}
                        height={600}
                        className="
                            h-full
                            w-[35vw]
                            xs:w-[25vw]
                            transition-transform
                            duration-300
                            ease-out
                            scale-105
                            hover:scale-110
                            sm:w-35
                            lg:w-40
                        "
                    />
                </Link>

                <nav
                    className={`
        hidden
        items-center
        group
        gap-8
        text-lg
        text-[#969393]
        md:flex
        xl:gap-10
        ${googleSansFlex.className}
    `}
                >
                    {navItems.map((item) => {
                        const isActive = activeSection === item.toLowerCase()
                        return (
                            <div
                                key={item}
                                className="relative"
                            >
                                <TextSwap
                                    text={item}
                                    className="hover:text-black"
                                    animateAllowed={isDesktop && !isActive}
                                    cursurSize={isActive ? "0" : undefined}
                                />

                                {isActive && (
                                    <span
                                        className="
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        w-full
                        bg-[#928e8e]
                        group-hover:bg-black
                    "
                                    />
                                )}
                            </div>
                        )
                    })}
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
                        <IconButton icon={FileText} className="w-full h-full" animateAllowed={true} />
                    </div>

                    <div className="w-35 h-11">
                        <TextSwapButton text="Let's Talk!" className="w-full h-full" animateAllowed={isDesktop} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar