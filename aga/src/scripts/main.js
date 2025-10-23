/**
 * Main JavaScript Entry Point
 * Initializes all components and modules
 */
import { Navigation } from './modules/navigation.js';
import { TabPanel } from './modules/tabs.js';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  const nav = new Navigation();

  // Initialize tab panels
  const tabs = new TabPanel();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading class removal after page load
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
  });
});

// Export for use in other modules if needed
export { Navigation, TabPanel };
