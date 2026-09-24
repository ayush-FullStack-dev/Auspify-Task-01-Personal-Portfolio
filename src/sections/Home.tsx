import RevealPortrait from "@/components/shared/RevealPortrait"
import OutlinedWordmark from "@/components/shared/OutlinedWordmark"

type HomeProps = {
    isDesktop: boolean
}

const Home = ({ isDesktop }: HomeProps) => {
    return (
        <section
            className="
                relative
                h-[calc(100dvh-80px)]
                w-full
                shrink-0
                overflow-hidden
                lg:h-[calc(100dvh-88px)]
                lg:max-h-[calc(100dvh-88px)]
            "
        >
            <div
                className="
                    absolute
                    inset-x-0
                    top-[clamp(2rem,7dvh,5rem)]
                    z-30
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-[clamp(0.5rem,2vw,2rem)]
                    whitespace-nowrap
                "
            >
                <OutlinedWordmark
                    text="Ayush"
                    className="
                        text-[clamp(3rem,8.5vw,11rem)]
                        leading-none
                    "
                />

                <OutlinedWordmark
                    text="KUMAR"
                    className="
                        text-[#262626]
                        text-[clamp(3rem,8.5vw,9rem)]
                        leading-none
                    "
                />
            </div>

            <div
                className="
                    absolute
                    inset-0
                    z-40
                    flex
                    items-end
                    justify-center
                    overflow-hidden
                "
            >
                <RevealPortrait
                    graySrc="/images/person-gray.webp"
                    colorSrc="/images/person-color.webp"
                    className="
                        h-[75dvh]
                        max-h-full
                        w-auto
                        max-w-none
                        shrink-0
                    "
                    allowAnimation={isDesktop}
                />
            </div>
        </section>
    )
}

export default Home