import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [infoNotice, setInfoNotice] = useState<string | null>(null);

  return (
    <footer
      role="contentinfo"
      className="docked full-width bottom bg-primary text-on-primary border-t border-primary-container/40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col gap-12 w-full">
        {/* Top Tier: Brand, Physical Address & Studio Welcome */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Brand & Vision */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-headline-lg font-headline-lg text-surface-bright font-normal block mb-2">
                Malabar Trails
              </span>
              <span className="text-label-sm font-label-sm text-secondary-fixed tracking-[0.2em] block mb-4">
                BOUTIQUE TRAVEL CO. • EST. 2016 • KERALA
              </span>
              <p className="text-body-md font-body-md text-on-primary-container max-w-sm">
                Artisanal slow travel and private fleet journeys across Cochin, the backwater canals, and the high ranges of the Western Ghats.
              </p>
            </div>
            <address className="not-italic mt-8 pt-6 border-t border-primary-container/60 text-body-sm font-body-sm text-on-primary-container">
              <p className="font-medium text-surface-bright mb-1">
                Fort Kochi Studio:
              </p>
              <p>14/282 Bastian Street, Near Parade Ground</p>
              <p>Fort Kochi, Cochin, Kerala 682001, India</p>
            </address>
          </div>

          {/* Middle: Navigational Links */}
          <nav
            aria-label="Footer Journeys and Charters"
            className="md:col-span-4 flex flex-col"
          >
            <span className="text-label-sm font-label-sm text-secondary-fixed tracking-widest mb-4">
              JOURNEYS &amp; CHARTERS
            </span>
            <ul className="flex flex-col space-y-3 text-body-sm font-body-sm">
              <li>
                <a
                  className="text-on-primary-container hover:text-surface-bright transition-colors"
                  href="#about"
                >
                  Responsible Travel Manifesto
                </a>
              </li>
              <li>
                <a
                  className="text-tertiary-fixed underline font-medium hover:text-surface-bright transition-colors"
                  href="#fleet"
                >
                  Private Charters &amp; Fleet
                </a>
              </li>
              <li>
                <a
                  className="text-on-primary-container hover:text-surface-bright transition-colors"
                  href="#tours"
                >
                  Bespoke Itineraries
                </a>
              </li>
              <li>
                <a
                  className="text-on-primary-container hover:text-surface-bright transition-colors"
                  href="#about"
                >
                  Fort Kochi Studio
                </a>
              </li>
              <li>
                <a
                  className="text-on-primary-container hover:text-surface-bright transition-colors"
                  href="https://wa.me/919447012345"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Direct WhatsApp
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    setInfoNotice(
                      'All journeys include upfront state permits, plastic-free provisions, and 100% transparent local honorariums. Flexible rescheduling up to 14 days before arrival.'
                    )
                  }
                  className="text-on-primary-container hover:text-surface-bright transition-colors text-left cursor-pointer"
                >
                  Terms &amp; Privacy
                </button>
              </li>
            </ul>
          </nav>

          {/* Right: Contact, Inquiries & Operating Hours */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-label-sm font-label-sm text-secondary-fixed tracking-widest mb-4">
              REACH THE DESK
            </span>
            <div className="space-y-3 text-body-sm font-body-sm text-on-primary-container">
              <p>
                <span className="block text-surface-bright font-medium">
                  Telephone
                </span>
                <a
                  href="tel:+914842218904"
                  className="hover:text-surface-bright transition-colors"
                >
                  +91 (0) 484 221 8904
                </a>
              </p>
              <p>
                <span className="block text-surface-bright font-medium">
                  Direct Mobile / WhatsApp
                </span>
                <a
                  href="https://wa.me/919447012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-surface-bright transition-colors"
                >
                  +91 94470 12345
                </a>
              </p>
              <p>
                <span className="block text-surface-bright font-medium">
                  Inquiries
                </span>
                <a
                  href="mailto:journeys@malabartrails.com"
                  className="hover:text-surface-bright transition-colors"
                >
                  journeys@malabartrails.com
                </a>
              </p>
              <p className="pt-2 text-[12px] text-on-primary-container/80">
                Desk hours: Mon – Sat, 8:30 AM to 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {infoNotice && (
          <div
            role="status"
            className="p-4 rounded bg-primary-container text-surface-bright text-body-sm flex items-center justify-between gap-4 border border-outline-variant/20"
          >
            <span>{infoNotice}</span>
            <button
              type="button"
              onClick={() => setInfoNotice(null)}
              className="text-tertiary-fixed hover:text-surface-bright text-label-sm tracking-wider uppercase shrink-0 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Bottom Line: Exact Immutable Copyright Text */}
        <div className="pt-8 border-t border-primary-container/40 flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-on-primary-container">
          <div>
            © 2024 Malabar Trails Travel Co. Fort Kochi, Kerala. Thoughtful slow travel.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-6 text-[12px]">
            <button
              type="button"
              onClick={() =>
                setInfoNotice(
                  'Accredited by Department of Tourism, Government of Kerala (#KT-4412) — Gold Standard Responsible Tourism Partner.'
                )
              }
              className="hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer"
            >
              Kerala Tourism Accr. #KT-4412
            </button>
            <span aria-hidden="true">•</span>
            <a
              href="#tours"
              className="hover:text-tertiary-fixed-dim transition-colors duration-200 cursor-pointer"
            >
              Bespoke Slow Journeys
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
