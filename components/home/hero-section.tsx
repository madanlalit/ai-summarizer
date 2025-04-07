"use client"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "../ui/animated-grid-pattern"
import { Hero } from "../ui/animated-hero"

export default function HeroSection() {
    return (
        <section className="flex items-center justify-center h-screen w-full bg-gradient-to-b from-background to-gray-50">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background">
                <h1 className="text-center z-10 text-3xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    <Hero />
                </h1>
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                        "absolute inset-0 h-full w-full"
                    )}
                />
            </div>
        </section>
    )
}
