"use client";
import DemoSection from "@/components/home/demo-section";
import { Faq1Demo } from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section"
import HowItWorksSection from "@/components/home/how-it-works-section";
import TestimonialsSection from "@/components/home/testimonial-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Faq1Demo />
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </div>
  );
}