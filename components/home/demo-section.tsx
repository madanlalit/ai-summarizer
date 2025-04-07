import { Zap, BrainCircuit, FileClock, FileText, List, Gem } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function DemoSection() {
    return (
        <section className="w-full py-10 px-4 md:py-16 lg:py-20 bg-background text-foreground">
            <div className="container mx-auto min-h-[700px] h-max max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12"></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-10 gap-3 md:gap-4 lg:gap-6 h-full">
                    <div className="md:row-span-2 md:col-span-4 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-8">
                        <FileText size={48} className="mb-5 text-secondary" />
                        <p className="text-2xl font-bold text-center leading-relaxed">
                            Transform Complex Documents into Clear Summaries
                        </p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-2 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-6">
                        <FileClock size={32} className="mb-3 text-secondary" />
                        <p className="text-base font-medium text-center">Instant Summaries in Seconds</p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-4 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-7">
                        <List size={32} className="mb-3 text-secondary" />
                        <p className="text-base font-semibold">Key Points Extraction</p>
                        <p className="text-sm text-center mt-2 text-background/90">Automatically identifies crucial information</p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-4 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-7">
                        <BrainCircuit size={32} className="mb-3 text-secondary" />
                        <p className="text-base font-semibold">Smart Analysis</p>
                        <p className="text-sm text-center mt-2 text-background/90">AI-powered comprehension and synthesis</p>
                    </div>
                    
                    <div className="md:row-span-1 md:col-span-2 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:scale-102 hover:shadow-lg p-6">
                        <Gem size={32} className="mb-3 text-secondary" />
                        <p className="text-base font-medium text-center">Premium Quality Summaries</p>
                    </div>
                    
                    <div className="md:col-span-10 bg-gradient-to-br from-primary to-[#006A71] rounded-2xl flex flex-col justify-center items-center text-primary-foreground transition-all hover:shadow-xl p-8">
                        <p className="text-xl md:text-2xl font-bold mb-3">Try Our Document Summarizer Now</p>
                        <p className="text-base opacity-80 mb-5">Upload any document and see the magic happen</p>
                        <Button variant="outline" effect="ringHover" className="text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg font-medium mt-3">
                            Get Started <Zap size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
