"use client"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "../ui/animated-grid-pattern"
import { Hero } from "../ui/animated-hero"

export default function HeroSection() {
    return (
        <section className="flex items-center justify-center h-auto w-full">
            <div className="relative flex h-[500px] items-center justify-center overflow-hidden  bg-background p-55 ">
                <h1 className=" text-center justify-center text-2xl text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                    <Hero />
                </h1>
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                    )}
                />
            </div>
        </section>
    )
}
