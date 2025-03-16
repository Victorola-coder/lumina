"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  return (
    <div className="border-b border-light/10 last:border-b-0">
      <button
        className={cn(
          "flex w-full items-center justify-between py-5 px-6 text-left transition-colors",
          isOpen ? "text-primary" : "text-light hover:text-primary"
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <span className="text-lg font-display">{title}</span>
        <motion.span
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-2xl origin-center flex items-center justify-center h-6 w-6 ml-4 flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`content-${index}`}
            id={`accordion-content-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6 text-light/60 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
  defaultOpen?: number | null;
}

export function Accordion({ items, defaultOpen = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded-lg border border-light/10 divide-y divide-light/10 bg-dark-100/30 backdrop-blur-sm overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
