import TextSwap from "@/components/animation/TextSwap";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 z-99">
            <div className="flex gap-10">
                <Link
                    href="/"
                    data-cursor
                    data-cursor-size="60"
                >
                    <Image
                        alt="Logo"
                        src="/brand/logo.svg"
                        width={600}
                        height={600}
                        className="
            w-40
            h-auto
            transition-transform
            duration-300
            ease-out
            hover:scale-104
        "
                    />
                </Link>
                <div className="text-lg font-bold flex gap-5">
                    <TextSwap text="Home" />
                    <TextSwap text="About" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;