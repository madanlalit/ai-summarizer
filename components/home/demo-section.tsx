"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, BrainCircuit, FileClock, FileText, List, Gem } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DemoSection() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    
    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
    };

    return (
        <section className="relative w-full py-16 md:py-24 lg:py-28 bg-gradient-to-b from-background via-background/95 to-background/90 text-foreground overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
            <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-primary/5 via-primary/3 to-transparent blur-3xl" />
            
            <div className="container mx-auto relative z-10 max-w-6xl px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight"
                >
                    <span className="bg-gradient-to-r from-primary to-[#006A71] bg-clip-text text-transparent">
                        Powerful Features
                    </span>
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-foreground/70 max-w-2xl mx-auto mb-16"
                >
                    Our AI-powered platform transforms complex documents into clear, actionable insights
                </motion.p>
                
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-5 lg:gap-6"
                >
                    <motion.div 
                        variants={item}
                        onMouseEnter={() => setHoveredCard(0)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={cn(
                            "md:row-span-2 md:col-span-4 rounded-2xl flex flex-col justify-center items-center text-primary-foreground p-8",
                            "bg-gradient-to-br from-primary/90 to-[#006A71]/90 backdrop-blur-sm border border-primary/20",
                            "transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,106,113,0.3)]"
                        )}
                    >
                        <motion.div animate={{ scale: hoveredCard === 0 ? 1.1 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
                            <FileText size={56} className="mb-6 text-secondary" />
                        </motion.div>
                        <p className="text-2xl font-bold text-center leading-relaxed">
                            Transform Complex Documents into Clear Summaries
                        </p>
                    </motion.div>
                    
                    {[
                        { icon: FileClock, title: "Instant Summaries in Seconds", id: 1 },
                        { icon: List, title: "Key Points Extraction", description: "Automatically identifies crucial information", id: 2 },
                        { icon: BrainCircuit, title: "Smart Analysis", description: "AI-powered comprehension and synthesis", id: 3 },
                        { icon: Gem, title: "Premium Quality Summaries", id: 4 }
                    ].map((feature, index) => (
                        <motion.div 
                            key={feature.id}
                            variants={item}
                            onMouseEnter={() => setHoveredCard(feature.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={cn(
                                "rounded-2xl flex flex-col justify-center items-center text-primary-foreground p-7",
                                "bg-gradient-to-br from-primary/90 to-[#006A71]/90 backdrop-blur-sm border border-primary/20",
                                "transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,106,113,0.25)]",
                                index === 0 || index === 3 ? "md:row-span-1 md:col-span-2" : "md:row-span-1 md:col-span-4"
                            )}
                        >
                            <motion.div 
                                animate={{ 
                                    scale: hoveredCard === feature.id ? 1.1 : 1,
                                    rotateY: hoveredCard === feature.id ? 360 : 0 
                                }} 
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <feature.icon size={36} className="mb-4 text-secondary" />
                            </motion.div>
                            <p className="text-base font-semibold text-center">{feature.title}</p>
                            {feature.description && (
                                <p className="text-sm text-center mt-2 text-primary-foreground/80">{feature.description}</p>
                            )}
                        </motion.div>
                    ))}
                    
                    <motion.div 
                        variants={item}
                        className={cn(
                            "md:col-span-10 rounded-2xl flex flex-col justify-center items-center text-primary-foreground p-8 mt-2",
                            "bg-gradient-to-br from-primary/90 to-[#006A71]/90 backdrop-blur-sm border border-primary/20",
                            "transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,106,113,0.3)]"
                        )}
                    >
                        <p className="text-xl md:text-2xl font-bold mb-3">Try Our Document Summarizer Now</p>
                        <p className="text-base opacity-90 mb-5 max-w-xl text-center">Upload any document and see the magic happen in seconds</p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Button variant="destructive" effect="ringHover" size="lg" className="bg-background text-secondary-foreground hover:bg-background/90 px-8 py-6 rounded-lg font-medium mt-3">
                                Get Started <Zap size={18} className="ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
