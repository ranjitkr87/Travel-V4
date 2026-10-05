import React from 'react';
import { FLEET_AMENITIES, FLEET_ITEMS, FleetItem } from '../data/malabarData';

interface FleetsProps {
  onSelectFleet: (fleet: FleetItem) => void;
}

export const Fleets: React.FC<FleetsProps> = ({ onSelectFleet }) => {
  return (
    <section
      id="fleet"
      aria-labelledby="fleet-heading"
      className="py-24 bg-surface-container-lowest border-b border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label-sm font-label-sm text-secondary tracking-[0.2em] block mb-2">
            CURATED VEHICLES &amp; DRIVER STORIES
          </span>
          <h2
            id="fleet-heading"
            className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4"
          >
            Our Fleet – From Local Roads to Luxury Roads
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Every journey demands its own pace. An honest, meticulously maintained fleet driven by local chauffeurs who know every coastal lane, spice warehouse bend, and mountain pass.
          </p>
        </div>

        {/* 6-Card Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET_ITEMS.map((item) => (
            <article
              key={item.id}
              className="p-6 rounded border border-outline-variant/30 bg-surface-container-low/60 flex flex-col justify-between hover:border-secondary transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label-sm font-label-sm text-secondary tracking-wider bg-surface-container px-2.5 py-1 rounded">
                    {item.classCode}
                  </span>
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    data-icon={item.icon}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-label-md font-label-md text-on-surface-variant mb-4">
                  {item.subtitle}
                </p>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-body-sm font-body-sm text-on-surface-variant font-medium">
                  {item.rateLabel}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectFleet(item)}
                  aria-label={`Enquire about ${item.title}`}
                  className="text-secondary hover:text-primary font-label-md text-label-md font-semibold cursor-pointer whitespace-nowrap"
                >
                  Enquire →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Fleet Amenities / Transparent Quality Bar */}
        <div
          role="list"
          aria-label="Included Fleet Amenities"
          className="mt-12 p-8 bg-surface-container rounded border border-outline-variant/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {FLEET_AMENITIES.map((amenity) => (
            <div key={amenity.title} role="listitem">
              <span
                className="material-symbols-outlined text-secondary text-2xl mb-1 block"
                data-icon={amenity.icon}
                aria-hidden="true"
              >
                {amenity.icon}
              </span>
              <h3 className="font-headline-sm text-[16px] text-primary">
                {amenity.title}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleets;
