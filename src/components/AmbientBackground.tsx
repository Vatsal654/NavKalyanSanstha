import React from 'react';

/**
 * AmbientBackground renders a set of soft, blurred, slowly-floating
 * gradient orbs fixed behind all page content. This is purely decorative
 * (pointer-events disabled) and gives the whole site the "liquid glass"
 * premium atmosphere referenced in the brand mark — warm gold, mauve
 * purple, and deep navy light blooms drifting behind frosted panels.
 */
const AmbientBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="ambient-orb"
        style={{
          top: '-8%',
          left: '-6%',
          width: '38vw',
          height: '38vw',
          background: 'radial-gradient(circle, hsl(var(--brand-gold) / 0.35), transparent 70%)',
          animationDelay: '0s',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          top: '10%',
          right: '-10%',
          width: '42vw',
          height: '42vw',
          background: 'radial-gradient(circle, hsl(var(--brand-purple) / 0.30), transparent 70%)',
          animationDelay: '2s',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          bottom: '-12%',
          left: '20%',
          width: '46vw',
          height: '46vw',
          background: 'radial-gradient(circle, hsl(var(--brand-rose) / 0.20), transparent 70%)',
          animationDelay: '4s',
        }}
      />
      <div
        className="ambient-orb"
        style={{
          bottom: '5%',
          right: '10%',
          width: '30vw',
          height: '30vw',
          background: 'radial-gradient(circle, hsl(var(--brand-navy) / 0.18), transparent 70%)',
          animationDelay: '1s',
        }}
      />
    </div>
  );
};

export default AmbientBackground;
