import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FaqItem {
    question: string;
    answer: string;
  }
  
  interface Faq1Props {
    heading?: string;
    items?: FaqItem[];
  }
  
  const Faq1 = ({
    heading = "Frequently asked questions",
    items = [
        {
          question: "What is an AI Summarizer?",
          answer:
            "An AI Summarizer is an advanced tool powered by artificial intelligence that automatically condenses long pieces of text into concise, coherent summaries. It can help users quickly grasp the main points of a document, article, or any other content.",
        },
        {
          question: "What is the purpose of an AI Summarizer?",
          answer:
            "The purpose of an AI Summarizer is to save time by providing accurate and relevant summaries of lengthy texts, making it easier for users to understand key information without reading the entire content. It's especially useful for busy professionals and researchers.",
        },
        {
          question: "How does the AI Summarizer work?",
          answer:
            "The AI Summarizer uses natural language processing (NLP) and machine learning techniques to analyze the content and identify the most important information. It then generates a shortened version that retains the essential points, making the content more digestible.",
        },
        {
          question: "What are the benefits of using an AI Summarizer?",
          answer:
            "The benefits of using an AI Summarizer include saving time, enhancing productivity, improving information retention, and enabling users to quickly stay updated on important topics without sifting through large volumes of text.",
        },
        {
          question: "Can the AI Summarizer handle different types of content?",
          answer:
            "Yes, the AI Summarizer can handle a wide range of content types, including articles, research papers, news reports, and even long emails. It is designed to provide effective summaries for various kinds of written material.",
        },
        {
          question: "Is the AI Summarizer customizable?",
          answer:
            "Yes, the AI Summarizer offers customization options that allow users to adjust the length of summaries, choose summary styles, and prioritize certain information. This ensures the output meets your specific needs and preferences.",
        },
      ],
  }: Faq1Props) => {
    return (
      <section className="py-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-[#006A71] bg-clip-text text-transparent">{heading}
            </span>
          </h2>
          {items.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    );
  };
  
  export { Faq1 };
  