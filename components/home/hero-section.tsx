"use client";

import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { Hero } from "../ui/animated-hero";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,theme(colors.primary/10),transparent_70%)] py-16 md:py-24 lg:min-h-[95vh] flex items-center justify-center"
    >
      {/* Animated Hero Content */}
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.98 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Soft radial primary-glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)] opacity-80 pointer-events-none" />

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.025] mix-blend-soft-light pointer-events-none" />

      {/* Glassy floating blobs */}
      <motion.div
        className="absolute top-20 left-[8%] w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-20 right-[8%] w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      {/* Animated grid pattern */}
      {!prefersReducedMotion && (
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.12}
          duration={8}
          repeatDelay={0}
          className={cn(
            "absolute inset-0 h-full w-full",
            "[mask-image:radial-gradient(1200px_circle_at_center,black,transparent)] pointer-events-none"
          )}
        />
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={scrollToNextSection}
        role="button"
        aria-label="Scroll to next section"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") scrollToNextSection();
        }}
      >
        <motion.div
          className="flex flex-col items-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-xs text-primary/60 mb-2 hidden sm:block transition-opacity group-hover:opacity-80">
            Scroll down
          </p>
          <motion.div
            className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:border-primary/50 transition-colors"
            animate={!prefersReducedMotion ? { y: [0, 6, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-primary/60 group-hover:text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
