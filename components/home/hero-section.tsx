"use client"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "../ui/animated-grid-pattern"
import { Hero } from "../ui/animated-hero"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
    const prefersReducedMotion = useReducedMotion()
    const [isLoaded, setIsLoaded] = useState(false)
    
    // Set component as loaded after mount
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    
    // Scroll to the next section smoothly
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    return (
        <section 
            id="hero"
            aria-label="Hero Section" 
            className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90 py-16 md:py-24 lg:min-h-[95vh] flex items-center justify-center"
        >
            <motion.div 
                className="relative w-full z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
            </motion.div>
            
            {/* Modern gradient background with noise texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)] opacity-70" />
            
            {/* Noise texture overlay */}
            <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] mix-blend-soft-light" />
            
            {/* Glass morphism blur effects */}
            <motion.div 
                className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div 
                className="absolute bottom-20 right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            />
            
            {/* Animated grid with enhanced visual appeal */}
            {!prefersReducedMotion && (
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.12}
                    duration={8}
                    repeatDelay={0}
                    className={cn(
                        "absolute inset-0 h-full w-full",
                        "[mask-image:radial-gradient(1200px_circle_at_center,black,transparent)]"
                    )}
                />
            )}
            
            {/* Modern scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
                transition={{ delay: 1.2 }}
                onClick={scrollToNextSection}
                role="button"
                aria-label="Scroll to next section"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        scrollToNextSection();
                    }
                }}
            >
                <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <p className="text-xs text-primary/60 mb-2 hidden sm:block">Scroll down</p>
                    <motion.div 
                        className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary/40 transition-colors"
                        animate={!prefersReducedMotion ? { y: [0, 5, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-4 h-4 text-primary/60" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}
