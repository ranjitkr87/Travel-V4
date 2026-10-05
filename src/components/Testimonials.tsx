import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section
      aria-label="Traveler Testimonial"
      className="py-24 bg-surface border-b border-outline-variant/30"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span
          className="material-symbols-outlined text-4xl text-secondary mb-4 block"
          data-icon="format_quote"
          aria-hidden="true"
        >
          format_quote
        </span>
        <blockquote className="text-headline-md md:text-headline-lg font-headline-lg text-primary italic leading-relaxed mb-8">
          “It felt less like a booked tour and more like being introduced to Kerala by an old, well-read friend who loves the land deeply.”
        </blockquote>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-8 h-px bg-outline-variant" aria-hidden="true"></div>
          <cite className="not-italic font-label-md text-label-md text-primary font-semibold tracking-wider">
            ELENA &amp; MARCUS
          </cite>
          <span className="text-body-sm font-body-sm text-on-surface-variant">
            • Kyoto &amp; London
          </span>
          <div className="w-8 h-px bg-outline-variant" aria-hidden="true"></div>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
          Traveled Fort Kochi, Alleppey &amp; Munnar for 10 Days in November 2023
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
