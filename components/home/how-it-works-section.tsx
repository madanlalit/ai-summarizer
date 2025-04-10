import { FileUp, Brain, FileText, CheckSquare, Download, Share2, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
    const steps = [
        {
            icon: <FileUp className="w-10 h-10 text-primary" />,
            title: "Upload Document",
            description: "Upload a PDF document via our user-friendly interface."
        },
        {
            icon: <Brain className="w-10 h-10 text-primary" />,
            title: "AI Analysis",
            description: "Our AI analyzes the document and extracts relevant information."
        },
        {
            icon: <FileText className="w-10 h-10 text-primary" />,
            title: "Generate Summary",
            description: "Our AI compiles the data and extracts key insights, summarizing the document for you."
        },
        {
            icon: <CheckSquare className="w-10 h-10 text-primary" />,
            title: "Review Results",
            description: "Review the summary and insights generated by our AI."
        },
        {
            icon: <Download className="w-10 h-10 text-primary" />,
            title: "Download Summary",
            description: "Download the summarized document in your preferred format."
        },
        {
            icon: <Share2 className="w-10 h-10 text-primary" />,
            title: "Share Summary",
            description: "Easily share the summary with colleagues or integrate it into other systems."
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Enhanced background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="container max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                        How It Works
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover our streamlined process for transforming documents into actionable insights.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {steps.map((item, index) => (
                        <div 
                            key={index} 
                            className="group bg-card/80 backdrop-blur-sm text-card-foreground p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center relative"
                        >
                            {/* Step number indicator */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                                {index + 1}
                            </div>
                            
                            {/* Icon with hover effect */}
                            <div className="mb-6 relative">
                                <div className="absolute -inset-6 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-all duration-500" />
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {item.description}
                            </p>
                        </div>
                    ))}
                    
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10" />
                </div>
                
                {/* Call to action */}
                <div className="mt-16 text-center">
                    <a 
                        href="#try-now" 
                        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl"
                    >
                        Try It Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
