import React, { useState } from 'react';
import { HERO_IMAGE } from '../data/malabarData';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-outline-variant/30"
    >
      {/* Atmospheric Hero Image with High Priority LCP & Resilient Fallback */}
      <div className="absolute inset-0 z-0 bg-primary">
        {!imgError ? (
          <img
            alt="Kerala backwaters at misty dawn with a traditional wooden kettuvallam canoe gently drifting past silhouetted palm trees"
            className="w-full h-full object-cover object-center filter saturate-[0.9] contrast-[1.05]"
            src={HERO_IMAGE}
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full bg-gradient-to-br from-primary via-primary-container to-tertiary"
            aria-hidden="true"
          />
        )}
        {/* Natural quiet gradient overlays for refined text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-primary/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full flex flex-col justify-end text-on-primary">
        <div className="max-w-3xl">
          {/* Monograph Tagline */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-surface-bright/15 backdrop-blur-sm border border-surface-bright/25 rounded">
            <span
              className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"
              aria-hidden="true"
            ></span>
            <span className="text-label-sm font-label-sm text-surface-bright tracking-[0.14em]">
              AN INDEPENDENT TRAVEL COMPANION IN GOD’S OWN COUNTRY
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-display-lg-mobile md:text-display-lg font-display-lg text-surface-bright leading-tight md:leading-[1.1] mb-6"
          >
            Slow travel through the verdant waters &amp; spice coast of Kerala.
          </h1>

          {/* Subline */}
          <p className="text-body-lg font-body-lg text-surface-dim max-w-2xl mb-8 leading-relaxed font-light">
            Thoughtfully curated bespoke journeys, heritage stays, and private fleet charters designed with quiet reverence for local culture, backwater ecology, and indigenous land.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="bg-primary hover:bg-secondary text-surface-bright px-7 py-3.5 rounded font-label-md text-label-md tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 border border-surface-bright/20 whitespace-nowrap"
              href="#tours"
            >
              <span>Explore Handpicked Tours</span>
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_forward
              </span>
            </a>
            <a
              className="bg-surface-bright/10 hover:bg-surface-bright/20 text-surface-bright backdrop-blur-sm px-6 py-3.5 rounded font-label-md text-label-md tracking-wider transition-all duration-300 border border-surface-bright/30 flex items-center gap-2 whitespace-nowrap"
              href="#fleet"
            >
              <span>View Our Fleet</span>
              <span className="text-tertiary-fixed-dim" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Hero Sub-strip */}
        <div
          role="list"
          aria-label="Malabar Trails core commitments"
          className="mt-16 pt-6 border-t border-surface-bright/20 flex flex-wrap items-center justify-between gap-4 text-surface-dim font-label-sm text-label-sm tracking-widest"
        >
          <div role="listitem" className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[16px] text-tertiary-fixed"
              data-icon="location_on"
              aria-hidden="true"
            >
              location_on
            </span>
            <span>CURATED BY LOCAL WANDERERS IN FORT KOCHI</span>
          </div>
          <div role="listitem" className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[16px] text-tertiary-fixed"
              data-icon="directions_car"
              aria-hidden="true"
            >
              directions_car
            </span>
            <span>PRIVATE CHARTERS &amp; LOCAL ROAD MASTERY</span>
          </div>
          <div role="listitem" className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[16px] text-tertiary-fixed"
              data-icon="nature"
              aria-hidden="true"
            >
              nature
            </span>
            <span>LOW IMPACT &amp; CARBON CONSCIOUS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
