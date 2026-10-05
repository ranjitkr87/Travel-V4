import React, { useState } from "react";
import { JOURNEYS, JourneyCategory, JourneyItem } from "../data/malabarData";

interface ItinerariesProps {
  onSelectJourney: (journey: JourneyItem) => void;
  onRequestBespoke: () => void;
}

const CATEGORIES: JourneyCategory[] = [
  "ALL JOURNEYS",
  "BACKWATER SILENCE",
  "HERITAGE & SPICES",
  "HIGH RANGE & MIST",
];

export const Itineraries: React.FC<ItinerariesProps> = ({
  onSelectJourney,
  onRequestBespoke,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<JourneyCategory>("ALL JOURNEYS");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredJourneys =
    selectedCategory === "ALL JOURNEYS"
      ? JOURNEYS
      : JOURNEYS.filter((j) => j.category === selectedCategory);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="tours"
      aria-labelledby="itineraries-heading"
      className="py-24 bg-surface border-b border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-label-sm font-label-sm text-secondary tracking-[0.18em] block mb-2">
              CURATED ITINERARIES
            </span>
            <h2
              id="itineraries-heading"
              className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary"
            >
              Handpicked Journeys
            </h2>
            <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
              Bespoke itineraries crafted for contemplative travelers seeking
              depth over speed.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter journeys by travel theme"
            className="mt-6 md:mt-0 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    isSelected
                      ? "bg-primary text-surface-bright px-3.5 py-1.5 rounded text-label-sm font-label-sm tracking-wider cursor-pointer transition-colors whitespace-nowrap"
                      : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-3.5 py-1.5 rounded text-label-sm font-label-sm tracking-wider cursor-pointer transition-colors whitespace-nowrap"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredJourneys.map((journey) => (
            <article
              key={journey.id}
              className="group bg-surface-container-lowest border border-outline-variant/40 rounded overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-dim">
                {!failedImages[journey.id] ? (
                  <img
                    alt={journey.imageAlt}
                    src={journey.image}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(journey.id)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-container to-primary flex items-center justify-center p-6 text-center">
                    <span className="text-surface-bright font-headline-sm">
                      {journey.title}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-surface-bright/90 backdrop-blur-sm text-primary px-3 py-1 rounded text-label-sm font-label-sm tracking-wider border border-outline-variant/30">
                  {journey.duration}
                </div>
                <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm text-surface-bright px-3 py-1 rounded text-label-sm font-label-sm">
                  {journey.stayBadge}
                </div>
              </div>

              <div className="p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-label-sm font-label-sm text-secondary tracking-widest block mb-1">
                    {journey.region}
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-secondary transition-colors mb-3">
                    <button
                      type="button"
                      onClick={() => onSelectJourney(journey)}
                      className="text-left hover:underline focus:outline-none"
                    >
                      {journey.title}
                    </button>
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    {journey.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <span className="text-body-sm font-body-sm text-on-surface-variant block">
                      From
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-semibold tabular-nums">
                      {journey.price}
                    </span>
                    <span className="text-body-sm font-body-sm text-on-surface-variant">
                      {" "}
                      / couple
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectJourney(journey)}
                    aria-label={`View itinerary details for ${journey.title}`}
                    className="text-label-md font-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1 font-semibold cursor-pointer whitespace-nowrap"
                  >
                    <span>View Details</span>
                    <span
                      className="material-symbols-outlined text-[16px]"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itineraries;
