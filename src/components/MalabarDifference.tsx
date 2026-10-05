import React from 'react';
import { MALABAR_DIFFERENCES } from '../data/malabarData';

export const MalabarDifference: React.FC = () => {
  return (
    <section
      id="experiences"
      aria-labelledby="difference-heading"
      className="py-20 bg-surface-container-high/60 border-b border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-label-sm font-label-sm text-secondary tracking-[0.2em] block mb-2">
            WHY TRAVEL WITH US
          </span>
          <h2
            id="difference-heading"
            className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary"
          >
            The Malabar Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MALABAR_DIFFERENCES.map((item) => (
            <article key={item.title} className="flex flex-col">
              <div className="w-12 h-12 rounded bg-surface-container-lowest flex items-center justify-center mb-4 border border-outline-variant/30">
                <span
                  className="material-symbols-outlined text-secondary text-2xl"
                  data-icon={item.icon}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MalabarDifference;
