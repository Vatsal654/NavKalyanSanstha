import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * A floating, frosted-glass "back to top" button that fades in once the
 * visitor has scrolled past the hero. Purely additive UI polish — no
 * impact on existing navigation or page functionality.
 */
const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-5 md:bottom-8 md:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full glass text-primary shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-gold hover:text-accent ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
