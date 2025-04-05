"use client"
import { Hero } from "../ui/animated-hero"
import { Button } from "../ui/button"


export default function HeroSection() {
    return (
        <div>
            <div className="flex justify-center min-h-screen w-ful py-12 px-4">
                <div className="block">
                    <Hero />
                </div>
                </div>
        </div>
    )
}