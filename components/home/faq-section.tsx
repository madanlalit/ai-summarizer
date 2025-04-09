import { Faq1 } from "@/components/ui/faq1"

const demoData = {
  heading: "Frequently asked questions",
  items: [
    {
      question: "What is an AI Summarizer?",
      answer: "An AI Summarizer is a tool that uses artificial intelligence to automatically condense long texts into short, easy-to-read summaries. It helps you quickly grasp the main ideas of documents, articles, or any content without having to read everything."
    },
    {
      question: "Why should I use an AI Summarizer?",
      answer: "The AI Summarizer helps you save time by providing quick, accurate summaries of lengthy texts. It's perfect for busy professionals and researchers who need to understand key points without reading entire documents."
    },
    {
      question: "How does the AI Summarizer work?",
      answer: "Using natural language processing (NLP) and machine learning, the AI Summarizer analyzes a text and identifies the most important information. It then creates a shorter version that highlights the essential points, making the content easier to digest."
    },
    {
      question: "What are the benefits of using an AI Summarizer?",
      answer: "AI Summarizers save you time, improve productivity, and help with better retention of key information. They allow you to stay updated quickly without wading through lengthy content."
    },
    {
      question: "Can the AI Summarizer handle different types of content?",
      answer: "Yes! The AI Summarizer can process a wide variety of content types, from articles and research papers to news reports and long emails. It's versatile and works with many kinds of written material."
    },
    {
      question: "Can I customize the AI Summarizer?",
      answer: "Absolutely! The AI Summarizer allows you to customize the length of your summaries, choose specific styles, and prioritize certain points. This makes it easy to tailor the summaries to your needs."
    }
  ],
};

function Faq1Demo() {
  return <Faq1 {...demoData} />;
}

export { Faq1Demo };
