import React, { useState } from 'react';

interface TopNavBarProps {
  onPlanJourneyClick: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({ onPlanJourneyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('tours');

  const navItems = [
    { id: 'tours', label: 'Tours', href: '#tours' },
    { id: 'fleet', label: 'Fleet', href: '#fleet' },
    { id: 'experiences', label: 'Experiences', href: '#experiences' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      role="banner"
      className="docked full-width top-0 sticky z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_2px_8px_rgba(20,39,30,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 w-full">
        {/* Brand Logo / Wordmark */}
        <a
          className="flex flex-col group shrink-0"
          href="#"
          aria-label="Malabar Trails — Fort Kochi Slow Travel Home"
        >
          <span className="text-headline-sm lg:text-headline-md font-headline-md tracking-tight text-primary font-medium group-hover:text-secondary transition-colors duration-200">
            Malabar Trails
          </span>
          <span className="text-label-sm font-label-sm text-on-surface-variant tracking-[0.18em] -mt-1">
            FORT KOCHI • SLOW TRAVEL
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'text-primary border-b-2 border-secondary font-semibold pb-1 text-label-md font-label-md tracking-wider whitespace-nowrap'
                    : 'text-on-surface-variant hover:text-primary transition-colors pb-1 text-label-md font-label-md tracking-wider whitespace-nowrap'
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Quick Phone (secondary / direct dial) */}
          <a
            className="hidden xl:flex items-center gap-1.5 text-body-sm font-body-sm text-on-surface-variant hover:text-primary transition-colors py-1 px-2.5 whitespace-nowrap"
            href="tel:+914842218904"
            aria-label="Call Malabar Trails Fort Kochi Studio at +91 (0) 484 221 8904"
          >
            <span
              className="material-symbols-outlined text-[17px]"
              data-icon="call"
              aria-hidden="true"
            >
              call
            </span>
            <span>+91 (0) 484 221 8904</span>
          </a>

          {/* WhatsApp Direct Trailing Action */}
          <a
            className="p-2 rounded bg-surface-container hover:bg-surface-container-high text-primary transition-all duration-200 active:scale-95 flex items-center justify-center border border-outline-variant/40"
            href="https://wa.me/919447012345"
            rel="noopener noreferrer"
            target="_blank"
            title="Direct WhatsApp"
            aria-label="Chat with Malabar Trails on WhatsApp"
          >
            <span
              className="material-symbols-outlined text-[19px] text-primary"
              data-icon="chat"
              aria-hidden="true"
            >
              chat
            </span>
          </a>

          {/* Trailing Primary Action Button */}
          <a
            className="bg-primary-container text-on-primary hover:bg-primary transition-all duration-200 active:scale-95 px-4 sm:px-5 py-2.5 rounded font-label-md text-label-md tracking-wider flex items-center shadow-sm whitespace-nowrap"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onPlanJourneyClick();
            }}
          >
            Plan Your Journey
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded bg-surface-container hover:bg-surface-container-high text-primary border border-outline-variant/40 flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-surface-container-lowest border-b border-outline-variant/40 px-6 py-5 shadow-md"
        >
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`block py-2 text-label-md font-label-md tracking-wider ${
                    activeNav === item.id
                      ? 'text-secondary font-semibold'
                      : 'text-primary hover:text-secondary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-outline-variant/30 flex flex-col gap-2 text-body-sm font-body-sm text-on-surface-variant">
            <a
              href="tel:+914842218904"
              className="flex items-center gap-2 py-1 text-primary font-medium"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                call
              </span>
              <span>+91 (0) 484 221 8904</span>
            </a>
            <span className="text-[12px]">
              14/282 Bastian Street, Fort Kochi, Kerala
            </span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default TopNavBar;
