"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="container py-12 md:py-24 mx-auto px-6">
      {/* FAQ Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Got a question? We've got answers. Browse through our FAQs to learn more about our services.
        </p>
      </motion.div>

      {/* FAQ Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-12 max-w-3xl space-y-8"
      >
        {faqSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * sectionIndex }}
            className="border-b border-gray-200 pb-6"
          >
            {/* Category Title */}
            <motion.h3
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold mb-4 cursor-pointer"
            >
              {section.title}
            </motion.h3>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible>
              {section.items.map((item, index) => (
                <AccordionItem key={item.value} value={item.value}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionMotionContent>
                      <p>{item.answer}</p>
                    </AccordionMotionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// Animated Accordion Content Component
const AccordionMotionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden mx-auto"
    >
      <AccordionContent>{children}</AccordionContent>
    </motion.div>
  );
};

// FAQ Sections with Categorization
const faqSections = [
  {
    title: "General",
    items: [
      { value: "item-1", question: "What services do you offer?", answer: "We provide web development, IoT solutions, AI solutions, mobile app development, and custom software development for businesses and individuals." },
      { value: "item-2", question: "Do you take on custom projects?", answer: "Yes! Whether it’s a unique web app, an AI-powered system, or a specialized IoT integration, we can build it." },
      { value: "item-3", question: "How can I get a quote for my project?", answer: "Just reach out with your project details, and we'll provide an estimate based on your requirements." }
    ]
  },
  {
    title: "Web & Mobile Development",
    items: [
      { value: "item-4", question: "Can you build both websites and mobile apps?", answer: "Yes, we develop modern, high-performance websites and mobile apps for iOS and Android." },
      { value: "item-5", question: "Do you offer ongoing maintenance for websites and apps?", answer: "Yes! We provide support, updates, and security patches to keep your website or app running smoothly." }
    ]
  },
  {
    title: "AI & IoT Solutions",
    items: [
      { value: "item-6", question: "Can you help with IoT hardware as well?", answer: "Yes, we design and develop both the software and hardware aspects of IoT systems." },
      { value: "item-7", question: "Do you support real-time monitoring for IoT devices?", answer: "Absolutely! We build IoT systems with real-time data tracking, analytics, and automation." },
      { value: "item-8", question: "Can you build AI models for my business?", answer: "Yes! We develop AI models for automation, analytics, and decision-making, tailored to your needs." },
      { value: "item-9", question: "Do you integrate AI into existing software?", answer: "Yes, we can integrate AI features into your existing apps or systems." }
    ]
  },
  {
    title: "Technical & Development",
    items: [
      { value: "item-10", question: "Can you work with my existing codebase?", answer: "Yes, we can improve, debug, or expand on your existing code." },
      { value: "item-11", question: "Do you provide API development and integration?", answer: "Yes, we build secure and scalable APIs for your software and third-party integrations." }
    ]
  },
  {
    title: "Payments & Pricing",
    items: [
      { value: "item-12", question: "How do you charge for projects?", answer: "We offer flexible pricing—fixed, hourly, or milestone-based—depending on the project." },
      { value: "item-13", question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and bank transfers." }
    ]
  }
];
