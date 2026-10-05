/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState } from 'react';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import { FleetItem, JourneyItem } from './data/malabarData';

// Lazy-loaded below-the-fold sections for optimal bundle splitting & fast initial paint
const Itineraries = lazy(() => import('./components/Itineraries'));
const Fleets = lazy(() => import('./components/Fleets'));
const MalabarDifference = lazy(() => import('./components/MalabarDifference'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Cta = lazy(() => import('./components/Cta'));
const Footer = lazy(() => import('./components/Footer'));
const InquiryModal = lazy(() => import('./components/InquiryModal'));

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<JourneyItem | null>(
    null
  );
  const [selectedFleet, setSelectedFleet] = useState<FleetItem | null>(null);

  const handleOpenGeneralInquiry = () => {
    setSelectedJourney(null);
    setSelectedFleet(null);
    setModalOpen(true);
  };

  const handleSelectJourney = (journey: JourneyItem) => {
    setSelectedFleet(null);
    setSelectedJourney(journey);
    setModalOpen(true);
  };

  const handleSelectFleet = (fleet: FleetItem) => {
    setSelectedJourney(null);
    setSelectedFleet(fleet);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
      {/* Skip to Main Content Link for Keyboard & Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-surface-bright focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* 1. TopNavBar Component */}
      <TopNavBar onPlanJourneyClick={handleOpenGeneralInquiry} />

      {/* Main Landmark */}
      <main id="main-content" role="main" className="flex-1">
        {/* 2. Hero Section Component */}
        <Hero />

        {/* 3. Philosophy & Ethos Section Component */}
        <Philosophy />

        {/* Below-the-fold Lazy-Loaded Sections with Seamless Fallback */}
        <Suspense
          fallback={
            <div
              aria-busy="true"
              aria-label="Loading curated journeys and fleet"
              className="py-24 text-center text-body-md text-on-surface-variant"
            >
              Loading Malabar Trails...
            </div>
          }
        >
          {/* 4. Handpicked Journeys (Itineraries) Component */}
          <Itineraries
            onSelectJourney={handleSelectJourney}
            onRequestBespoke={handleOpenGeneralInquiry}
          />

          {/* 5. Fleet Showcase Component */}
          <Fleets onSelectFleet={handleSelectFleet} />

          {/* 6. The Malabar Difference Component */}
          <MalabarDifference />

          {/* 7. Story & Testimonial Vignette Component */}
          <Testimonials />

          {/* 8. Pre-Footer Conversational CTA Banner Component */}
          <Cta onOpenCustomModal={handleOpenGeneralInquiry} />
        </Suspense>
      </main>

      {/* 9. Footer Component */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Interactive Bespoke Planning & Route Details Modal */}
      <Suspense fallback={null}>
        {modalOpen && (
          <InquiryModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            selectedJourney={selectedJourney}
            selectedFleet={selectedFleet}
          />
        )}
      </Suspense>
    </div>
  );
}
