import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialCard = ({ text, author, role, delay = 0 }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="w-full md:w-1/3 p-4"
    >
        <div className="bg-card/80 backdrop-blur-sm text-card-foreground p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 h-full flex flex-col">
            <Quote className="text-primary/40 w-10 h-10 mb-4" />
            <p className="text-muted-foreground mb-6 flex-grow">{text}</p>
            <div className="flex items-center">
                <Avatar className="h-10 w-10 bg-gradient-to-br from-primary/80 to-primary">
                    <AvatarFallback className="text-white font-medium">
                        {author[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="ml-3">
                    <p className="font-semibold">{author}</p>
                    <p className="text-muted-foreground text-sm">{role}</p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function TestimonialsSection() {
    const testimonials = [
        {
            text: "This AI summarizer saved me hours of reading through research papers. I get the key points in seconds!",
            author: "Dr. John Davis",
            role: "Researcher"
        },
        {
            text: "The accuracy of the summaries is incredible. It captures the essence while cutting through the fluff.",
            author: "Sarah Chen",
            role: "Content Manager"
        },
        {
            text: "As a student, this tool helps me digest complex articles quickly. My study efficiency has doubled!",
            author: "Michael Rodriguez",
            role: "Graduate Student"
        }
    ];
    
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
            <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-3">What Our Users Say</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of satisfied users who have transformed their reading experience
                    </p>
                </motion.div>
                
                <div className="flex flex-wrap justify-center items-stretch">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            text={testimonial.text}
                            author={testimonial.author}
                            role={testimonial.role}
                            delay={index * 0.1 + 0.3}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}