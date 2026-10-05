import React from 'react';
import { PHILOSOPHY_HIGHLIGHTS } from '../data/malabarData';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="philosophy-heading"
      className="py-24 bg-surface-container-lowest border-b border-outline-variant/30"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-label-sm font-label-sm text-secondary tracking-[0.2em] mb-3 block">
          THE MALABAR PHILOSOPHY
        </span>
        <h2
          id="philosophy-heading"
          className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-8 max-w-3xl mx-auto leading-snug"
        >
          Travel unhurried. Listen to the backwaters.
        </h2>
        <div className="w-16 h-px bg-secondary mx-auto mb-10" aria-hidden="true"></div>
        <div className="grid md:grid-cols-2 gap-10 text-left text-on-surface-variant text-body-lg font-body-lg leading-relaxed">
          <p>
            Kerala was never meant to be experienced at highway speeds through the tinted glass of a commercial tour bus. True Kerala lives in the slow lap of canal water against a hollowed wood canoe, the smell of sun-drying black pepper in Mattancherry warehouses, and the long mid-afternoon shadows stretching across lime-plastered Dutch verandahs.
          </p>
          <p>
            At Malabar Trails, we build itineraries that breathe. We connect discerning travelers with seventh-generation spice farmers, gentle country boatmen who row without engines at first dawn, and heritage stays that protect centuries of coastal vernacular architecture. We believe the luxury of travel lies in stillness, hospitality, and unscripted discovery.
          </p>
        </div>

        {/* Poetic Highlights Strip */}
        <div
          id="manifesto"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-outline-variant/20 text-left"
        >
          {PHILOSOPHY_HIGHLIGHTS.map((item) => (
            <article
              key={item.number}
              className="p-6 bg-surface-container-low rounded border border-outline-variant/20"
            >
              <span className="text-secondary font-headline-md text-headline-md block mb-2 font-serif">
                {item.number}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
