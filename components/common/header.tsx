"use client";

import { Zap } from 'lucide-react';
import { Button } from "../ui/button";
import NavLink from './nav-link';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'; // Added missing import

export default function Header() {
    const isLoggedIn = false; // Replace with actual authentication logic
    
    return (
        <header className="border-b border-gray-100">
            <nav className="container flex justify-between items-center py-4 lg:px-8 px-4 mx-auto">
                <div className="flex lg:flex-1 items-center">
                    <NavLink href="/" className="flex no-underline items-center gap-2 text-base font-medium text-gray-600 hover:text-[var(--color-dark-background)] transition-colors">
                        <Zap className="h-5 w-5 text-amber-500 hover:rotate-12 transition-transform duration-300" />
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <span className="font-bold text-gray-800 hover:text-[var(--color-dark-background)] transition-colors">QuickSummarize</span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-72 p-5 mt-2 rounded-lg shadow-md border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center">
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">AI-powered Document Summarizer</p>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Transform lengthy documents into concise, actionable insights in seconds using our advanced AI technology.
                                </p>
                                <div className="flex justify-between items-center mt-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Created by:</span>
                                    <div
                                        onClick={() => window.open('https://github.com/madanlalit', '_blank')}
                                        className="flex items-center gap-2 group cursor-pointer"
                                        aria-label="Creator's GitHub profile"
                                    >
                                        <Avatar className="h-6 w-6 transition-transform group-hover:scale-110">
                                            <AvatarImage src="https://github.com/madanlalit.png" alt="Lalit Madan" />
                                            <AvatarFallback>LM</AvatarFallback>
                                        </Avatar>
                                        <span className="text-xs font-medium text-[var(--color-dark-background)] group-hover:text-amber-500 transition-colors">
                                            @lalitmadan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                        </HoverCard>
                    </NavLink>
                </div>
                
                <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
                    <NavLink href="/#pricing" className="no-underline text-gray-600 hover:text-[var(--color-dark-background)] transition-colors">Pricing</NavLink>
                    {isLoggedIn && (
                        <NavLink href="/dashboard" className="no-underline text-gray-600 hover:text-[var(--color-dark-background)] transition-colors">Your Summaries</NavLink>
                    )}
                </div>
                
                <div className="flex lg:justify-end lg:flex-1">
                    {isLoggedIn ? (
                        <div className="flex items-center space-x-4">
                            <NavLink href="/upload" className="no-underline text-gray-600 hover:text-[var(--color-dark-background)] transition-colors">Upload a PDF</NavLink>
                            <div className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs font-semibold">Pro</div>
                            <Button variant="ghost" className="hover:bg-gray-100 hover:text-[var(--color-dark-background)] transition-colors">Sign Out</Button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            
                            <NavLink href="/sign-in" className="no-underline">
                                <Button variant="default" className="bg-[var(--color-dark-background)] hover:bg-opacity-90 transition-colors">
                                    Sign In
                                </Button>
                            </NavLink>
                            <NavLink href="/sign-up" className="no-underline">
                                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                                    Sign Up
                                </Button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
