"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Zap, FileText, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const titles = useMemo(
    () => ["lightning-fast", "accurate", "time-saving", "easy to use"],
    []
  );

  const rotateTitle = useCallback(() => {
    setTitleIndex(prev => (prev === titles.length - 1 ? 0 : prev + 1));
  }, [titles.length]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(rotateTitle, 2500);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [rotateTitle, isPaused]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-5 items-center justify-center flex-col mt-10 md:mt-0 lg:-mt-20 xl:-mt-40 py-8 md:py-12"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pb-3"
          >
            <Button variant="secondary" effect="ringHover" size="sm" className="gap-4">
              <FileText size={18} className="mr-1" /> Try it now
            </Button>
          </motion.div>
          
          <div className="flex gap-5 flex-col">
            <h1 className="text-3xl md:text-5xl lg:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-foreground/90"
                >
                Our AI PDF Summarizer is 
                </motion.span>
                <span 
                className="relative flex w-full justify-center overflow-hidden text-center md:pb-8 md:pt-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                role="text"
                aria-label={`Our AI PDF Summarizer is ${titles[titleIndex]}`}
                >
                &nbsp;
                <AnimatePresence mode="wait">
                  {titles.map((title, index) => (
                  index === titleIndex && (
                    <motion.span
                    key={title}
                    className="absolute font-semibold bg-gradient-to-r from-primary to-[#006A71] bg-clip-text text-transparent px-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 15 
                    }}
                    >
                    {title}
                    </motion.span>
                    )
                  ))}
                </AnimatePresence>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
            >
              Don't waste hours reading lengthy documents. Our AI summarizer extracts key insights 
              from PDFs in seconds, helping you save time, make faster decisions, and focus on what 
              truly matters to your business.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mt-4"
          >
            <Link href="/pricing">
              <Button variant="outline" effect="ringHover" size="lg" className="gap-2 border-2 border-primary">
              View Pricing <DollarSign size={18} className="ml-1" />
              </Button>
            </Link>
            <Link href="/get-started">
              <Button variant="default" effect="shineHover" size="lg" className="gap-2">
                Get Started <Zap size={18} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
