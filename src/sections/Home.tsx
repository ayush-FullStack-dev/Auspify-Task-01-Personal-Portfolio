import RevealPortrait from "@/components/shared/RevealPortrait"
import OutlinedWordmark from "@/components/shared/OutlinedWordmark"

type HomeProps = {
    isDesktop: boolean
}

const Home = ({ isDesktop }: HomeProps) => {
    return (
        <div className="max-h-dvh h-full w-dvw shrink-0 relative">

            <div className="flex items-center gap-8 whitespace-nowrap justify-center">
                <OutlinedWordmark
                    text="Ayush"
                    className="text-[clamp(5rem,12vw,14rem)]"
                />

                <OutlinedWordmark
                    text="KUMAR"
                    className="text-[#262626] text-[clamp(5rem,12vw,11rem)]"
                />
            </div>

            <div className="absolute inset-0 h-dvh w-dvw flex items-end justify-center">
                <RevealPortrait
                    graySrc="/images/person-gray.webp"
                    colorSrc="/images/person-color.webp"
                    className="h-[75dvh]" 
                    allowAnimation={isDesktop}
                />
            </div>

        </div>
    )
}

export default Home