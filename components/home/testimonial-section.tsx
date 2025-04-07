import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ text, author, role, delay = 0 }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="w-full md:w-1/3 p-4"
    >
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
            <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
            <p className="text-gray-700 mb-6 flex-grow">{text}</p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center text-white font-bold">
                    {author[0]}
                </div>
                <div className="ml-3">
                    <p className="font-semibold text-gray-800">{author}</p>
                    <p className="text-gray-500 text-sm">{role}</p>
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
        <section className="py-20 bg-gradient-to-b from-background to-gray-50">
            <div className="container px-4 max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-3"
                >
                    What Our Users Say
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
                >
                    Join thousands of satisfied users who have transformed their reading experience
                </motion.p>
                
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