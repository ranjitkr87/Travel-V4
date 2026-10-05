import React from 'react';

interface CtaProps {
  onOpenCustomModal: () => void;
}

export const Cta: React.FC<CtaProps> = ({ onOpenCustomModal }) => {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="py-20 bg-surface-container-low border-b border-outline-variant/30"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-surface-container-lowest p-8 lg:p-12 rounded border border-outline-variant/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-left">
            <span className="text-label-sm font-label-sm text-secondary tracking-widest block mb-2">
              LET US TALK TRAVEL
            </span>
            <h2
              id="cta-heading"
              className="text-headline-md font-headline-md text-primary mb-3"
            >
              Have a specific route in mind? Let us brew a cup of spiced tea and map it together.
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant">
              Reach out directly to our Fort Kochi planning desk. We reply within a few quiet hours with honest ideas and realistic journey pacing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenCustomModal}
              className="bg-primary hover:bg-secondary text-surface-bright px-6 py-3.5 rounded font-label-md text-label-md tracking-wider transition-colors text-center shadow-sm cursor-pointer whitespace-nowrap"
            >
              Plan a Custom Itinerary
            </button>
            <a
              className="bg-surface-container hover:bg-surface-container-high text-primary border border-outline-variant/50 px-6 py-3.5 rounded font-label-md text-label-md tracking-wider transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              href="https://wa.me/919447012345"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Message Malabar Trails on WhatsApp at +91 94470 12345"
            >
              <span
                className="material-symbols-outlined text-[18px] text-secondary"
                data-icon="chat"
                aria-hidden="true"
              >
                chat
              </span>
              <span>WhatsApp (+91 94470 12345)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
