'use client';

import { ChevronIcon } from '@/components/icons';
import { faqs } from '@/data';
import { cn } from '@/lib';
import { useState } from 'react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="border-very-dark-blue/15 mx-auto max-w-copy border-t">
      {faqs.map((faq, index) => {
        const open = index === openIndex;
        return (
          <li key={faq.question} className="border-very-dark-blue/15 border-b">
            <h3>
              <button
                type="button"
                id={`faq-question-${index}`}
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
                className="text-body md:text-body-lg text-very-dark-blue hover:text-soft-red flex w-full cursor-pointer items-center justify-between gap-4 pt-5 pb-3 text-left leading-8 transition-colors"
              >
                {faq.question}
                <ChevronIcon
                  className={cn('text-soft-blue h-3 w-4.5 shrink-0 transition-transform motion-reduce:transition-none', {
                    'text-soft-red rotate-180': open,
                  })}
                />
              </button>
            </h3>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              inert={!open}
              className={cn('grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none', {
                'grid-rows-[1fr]': open,
              })}
            >
              <div className="overflow-hidden">
                <p className="text-very-dark-blue/75 pt-5 pb-7.25 text-base leading-9 tracking-[0.15px]">{faq.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
