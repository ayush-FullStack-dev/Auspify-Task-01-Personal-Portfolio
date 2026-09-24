import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 z-99">
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
        </div>
    );
};

export default Navbar;