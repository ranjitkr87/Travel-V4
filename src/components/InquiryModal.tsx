import React, { useState } from 'react';
import { FleetItem, JourneyItem } from '../data/malabarData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJourney: JourneyItem | null;
  selectedFleet: FleetItem | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  selectedJourney,
  selectedFleet,
}) => {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [travelMonth, setTravelMonth] = useState('November 2026');
  const [guestsCount, setGuestsCount] = useState('2 Guests (Couple)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestEmail.trim()) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const title = selectedJourney
    ? selectedJourney.title
    : selectedFleet
    ? selectedFleet.title
    : 'Plan Your Slow Kerala Journey';

  const subtitle = selectedJourney
    ? `${selectedJourney.region} • ${selectedJourney.duration} • From ${selectedJourney.price} / couple`
    : selectedFleet
    ? `${selectedFleet.classCode} • ${selectedFleet.subtitle}`
    : 'FORT KOCHI PLANNING DESK • 14/282 BASTIAN STREET';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/70 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        className="bg-surface-container-lowest border border-outline-variant/40 rounded max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl p-6 sm:p-8 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-outline-variant/30">
          <div>
            <span className="text-label-sm font-label-sm text-secondary tracking-widest block mb-1">
              {subtitle}
            </span>
            <h2
              id="modal-dialog-title"
              className="text-headline-sm sm:text-headline-md font-headline-md text-primary"
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close planning desk dialog"
            className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        {/* Contextual Details if a Journey or Fleet was selected */}
        {selectedJourney && !submitted && (
          <div className="my-5 p-4 bg-surface-container-low rounded border border-outline-variant/25">
            <h3 className="text-label-md font-label-md text-primary tracking-wider uppercase mb-2">
              Curated Journey Highlights
            </h3>
            <ul className="space-y-1.5 text-body-sm text-on-surface-variant mb-3">
              {selectedJourney.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-secondary font-bold" aria-hidden="true">
                    –
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-primary font-medium pt-2 border-t border-outline-variant/20">
              Pacing Note: {selectedJourney.pacingNote}
            </p>
          </div>
        )}

        {selectedFleet && !submitted && (
          <div className="my-5 p-4 bg-surface-container-low rounded border border-outline-variant/25">
            <p className="text-body-sm text-on-surface-variant mb-2">
              {selectedFleet.description}
            </p>
            <div className="flex flex-wrap gap-4 text-[12px] text-primary font-medium pt-2 border-t border-outline-variant/20">
              <span>Capacity: {selectedFleet.capacity}</span>
              <span>•</span>
              <span>Ideal Route: {selectedFleet.idealFor}</span>
            </div>
          </div>
        )}

        {submitted ? (
          <div className="py-8 text-center">
            <span
              className="material-symbols-outlined text-4xl text-secondary mb-3 block"
              aria-hidden="true"
            >
              check_circle
            </span>
            <h3 className="text-headline-sm font-headline-sm text-primary mb-2">
              Namaste, {guestName}. Your note has reached Bastian Street.
            </h3>
            <p className="text-body-md text-on-surface-variant max-w-md mx-auto mb-6">
              Our Fort Kochi route curators will review your preferences for{' '}
              <strong>{travelMonth}</strong> and reply to{' '}
              <strong>{guestEmail}</strong> within a few quiet hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919447012345?text=${encodeURIComponent(
                  `Namaste Malabar Trails, I am ${guestName} inquiring about ${title} for ${travelMonth} (${guestsCount}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-secondary text-surface-bright px-5 py-2.5 rounded font-label-md text-label-md tracking-wider transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  chat
                </span>
                <span>Continue on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="bg-surface-container hover:bg-surface-container-high text-primary px-5 py-2.5 rounded font-label-md text-label-md tracking-wider border border-outline-variant/40 cursor-pointer"
              >
                Return to Page
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="guest-name"
                  className="block text-label-sm font-label-sm text-primary tracking-wider mb-1.5"
                >
                  YOUR NAME *
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g., Elena & Marcus"
                  className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/60 text-body-sm text-on-surface focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="guest-email"
                  className="block text-label-sm font-label-sm text-primary tracking-wider mb-1.5"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  id="guest-email"
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/60 text-body-sm text-on-surface focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="travel-month"
                  className="block text-label-sm font-label-sm text-primary tracking-wider mb-1.5"
                >
                  PREFERRED SEASON / MONTH
                </label>
                <select
                  id="travel-month"
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/60 text-body-sm text-on-surface focus:border-primary focus:outline-none"
                >
                  <option value="October – November 2026 (Post-Monsoon Verdant)">
                    October – November 2026 (Post-Monsoon Verdant)
                  </option>
                  <option value="December 2026 – January 2027 (Cool Coastal Winter)">
                    December 2026 – January 2027 (Cool Coastal Winter)
                  </option>
                  <option value="February – March 2027 (Quiet Harvest Season)">
                    February – March 2027 (Quiet Harvest Season)
                  </option>
                  <option value="June – August 2027 (Ayurveda & Monsoon Rains)">
                    June – August 2027 (Ayurveda &amp; Monsoon Rains)
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="guests-count"
                  className="block text-label-sm font-label-sm text-primary tracking-wider mb-1.5"
                >
                  TRAVEL PARTY
                </label>
                <select
                  id="guests-count"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/60 text-body-sm text-on-surface focus:border-primary focus:outline-none"
                >
                  <option value="Solo Wanderer">Solo Wanderer</option>
                  <option value="2 Guests (Couple)">2 Guests (Couple)</option>
                  <option value="3–5 Guests (Family / Friends)">
                    3–5 Guests (Family / Friends)
                  </option>
                  <option value="6–14 Guests (Private Group Charter)">
                    6–14 Guests (Private Group Charter)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="journey-notes"
                className="block text-label-sm font-label-sm text-primary tracking-wider mb-1.5"
              >
                YOUR IDEAL TEMPO &amp; INTERESTS
              </label>
              <textarea
                id="journey-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us if you prefer solar kettuvallams, birding in Munnar, colonial architecture, or specific fleet classes..."
                className="w-full px-3.5 py-2.5 rounded bg-surface-container-lowest border border-outline-variant/60 text-body-sm text-on-surface focus:border-primary focus:outline-none"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant/25">
              <span className="text-[12px] text-on-surface-variant">
                No automated bots. Answered personally from Fort Kochi.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-4 py-2.5 rounded text-label-md font-label-md text-on-surface-variant hover:text-primary cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-surface-bright px-6 py-2.5 rounded font-label-md text-label-md tracking-wider transition-colors cursor-pointer whitespace-nowrap"
                >
                  Send to Planning Desk
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
