import { Zap, BrainCircuit, FileClock, FileText, List, Gem } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function DemoSection() {
    return (
        <section className="w-full py-5 px-4 md:py-10 bg-background text-foreground">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10"></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6">
                    <div className="md:row-span-2 md:col-span-4 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-6">
                        <FileText size={40} className="mb-4 text-secondary" />
                        <p className="text-xl font-bold text-center leading-relaxed">
                            Transform Complex Documents into Clear Summaries
                        </p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-2 bg-primary rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-4">
                        <FileClock size={28} className="mb-3 text-accent" />
                        <p className="text-sm font-medium text-center">Instant Summaries in Seconds</p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-4 bg-primary rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-5">
                        <List size={28} className="mb-2 text-secondary" />
                        <p className="text-sm font-semibold">Key Points Extraction</p>
                        <p className="text-sm text-center mt-1 text-background/90">Automatically identifies crucial information</p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-4 bg-primary rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-5">
                        <BrainCircuit size={28} className="mb-2 text-secondary" />
                        <p className="text-sm font-semibold">Smart Analysis</p>
                        <p className="text-sm text-center mt-1 text-background/90">AI-powered comprehension and synthesis</p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-2 bg-primary rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-4">
                        <Gem size={28} className="mb-2 text-secondary" />
                        <p className="text-sm font-medium text-center">Premium Quality Summaries</p>
                    </div>
                    
                    <div className="md:col-span-10 bg-gradient-to-r from-[#006A71] to-primary rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:shadow-xl p-6">
                        <p className="text-lg md:text-xl font-bold mb-2">Try Our Document Summarizer Now</p>
                        <p className="text-sm opacity-80 mb-4">Upload any document and see the magic happen</p>
                        <Button variant="outline" effect="ringHover" className=" text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-lg font-medium mt-2">
                            Get Started <Zap size={16} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}