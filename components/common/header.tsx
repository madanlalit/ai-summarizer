"use client";

import {
  ArrowRightIcon,
  Zap,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";

export default function Header() {
  const isLoggedIn = false; // Replace with actual auth state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/80 backdrop-blur-xl transition-all duration-300",
        scrolled ? "border-b border-border/40 shadow-sm" : "border-b border-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between py-3 px-2 lg:px-4">
        {/* Logo & Brand */}
        <div className="flex items-center lg:flex-1">
          <NavLink
            href="/"
            className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors no-underline"
          >
            <div className="relative group">
              <Zap className="h-5 w-5 text-primary group-hover:rotate-[20deg] transition-transform duration-500" />
              <span className="absolute -inset-1 -z-10 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            {/* Brand Text with HoverCard */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="font-extrabold text-primary transition-all duration-300 hover:tracking-wide hover:drop-shadow-glow">
                  QuickSummarize
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-6 mt-2 rounded-xl shadow-2xl border border-gray-100/20 bg-background/95 backdrop-blur-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary animate-pulse" />
                    </div>
                    <h4 className="text-sm font-bold bg-gradient-to-r from-primary to-[#006A71] bg-clip-text text-transparent">
                      AI PDF Summarizer
                    </h4>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed">
                    Transform lengthy PDFs into concise, actionable insights using advanced AI tech.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <FeatureBadge icon={FileText} text="Extract key points" />
                    <FeatureBadge icon={Zap} text="AI-powered analysis" />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-border/20">
                    <span className="text-xs text-foreground/60">Created by:</span>
                    <div
                      onClick={() => window.open("https://github.com/madanlalit", "_blank")}
                      className="flex items-center gap-2 group cursor-pointer"
                      aria-label="Creator's GitHub profile"
                    >
                      <Avatar className="h-6 w-6 transition-transform group-hover:scale-110 ring-2 ring-primary/20 ring-offset-1 ring-offset-background">
                        <AvatarImage src="https://github.com/madanlalit.png" alt="Lalit Madan" />
                        <AvatarFallback>LM</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium text-foreground/80 group-hover:text-primary transition-colors">
                        @lalitmadan
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
          {["features", "pricing", "examples"].map((item) => (
            <NavLink
              key={item}
              href={`/#${item}`}
              className="text-foreground/80 hover:text-primary transition-colors no-underline"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
          {isLoggedIn && (
            <NavLink href="/dashboard" className="text-foreground/80 hover:text-primary transition-colors no-underline">
              Your Summaries
            </NavLink>
          )}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex lg:justify-end lg:flex-1 items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <NavLink href="/upload" className="no-underline">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-primary/20 text-primary hover:bg-primary/10"
                >
                  <FileText className="h-4 w-4" />
                  Upload PDF
                </Button>
              </NavLink>
              <div className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Pro</div>
              <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">
                Sign Out
              </Button>
            </div>
          ) : (
            <NavLink href="/sign-in" className="no-underline">
              <Button
                effect="expandIcon"
                icon={ArrowRightIcon}
                iconPlacement="right"
                variant="default"
                className="text-primary-foreground shadow-md hover:shadow-xl px-6 border-foreground"
              >
                Sign In
              </Button>
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-1"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-5 bg-background/95 backdrop-blur-lg border-t border-border/20 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {["features", "pricing", "examples"].map((item) => (
              <NavLink
                key={item}
                href={`/#${item}`}
                className="text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-2 no-underline"
              >
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}

            {isLoggedIn ? (
              <>
                <NavLink
                  href="/dashboard"
                  className="text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Your Summaries
                </NavLink>
                <NavLink href="/upload" className="no-underline py-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <FileText className="h-4 w-4" />
                    Upload PDF
                  </Button>
                </NavLink>
                <div className="py-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <NavLink href="/sign-in" className="no-underline w-full block py-3">
                <Button
                  icon={ArrowRightIcon}
                  iconPlacement="right"
                  variant="outline"
                  className="bg-gradient-to-r from-primary to-[#7ed6dc] text-primary-foreground shadow-md hover:shadow-xl w-full"
                >
                  Sign In
                </Button>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

/* 🔹 Little reusable feature pill component */
function FeatureBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
      <Icon className="h-3 w-3 text-primary" />
      <span className="text-xs text-foreground/60">{text}</span>
    </div>
  );
}
