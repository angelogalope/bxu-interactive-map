import { useState, useEffect } from "react";
import faqData from "../data/faqData.js";

export default function FaqModal({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="faq-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="faq-modal-title"
      onClick={onClose}
    >
      <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
        <div className="faq-modal-header">
          <h3 id="faq-modal-title">Frequently Asked Questions</h3>
          <button
            type="button"
            className="faq-modal-close"
            onClick={onClose}
            aria-label="Close FAQs"
          >
            ×
          </button>
        </div>
        <div className="faq-modal-body">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item${isOpen ? " open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-item-header"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq-item-chevron">▾</span>
                </button>
                {isOpen && (
                  <div className="faq-item-body">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
