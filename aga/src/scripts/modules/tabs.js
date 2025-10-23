/**
 * Tab Panel Module
 * Handles tabbed content sections with keyboard navigation
 */
export class TabPanel {
  constructor(selector = '[data-tabs]') {
    this.containers = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.containers.forEach(container => {
      const tabs = container.querySelectorAll('[data-tab]');
      const panels = container.querySelectorAll('[data-panel]');
      const prevBtn = container.querySelector('[data-tab-prev]');
      const nextBtn = container.querySelector('[data-tab-next]');

      if (tabs.length === 0 || panels.length === 0) return;

      // Set first tab and panel as active
      tabs[0]?.classList.add('active');
      panels[0]?.classList.add('active');

      // Tab click handlers
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
          e.preventDefault();
          this.switchTab(tabs, panels, index);
        });

        // Keyboard navigation
        tab.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = index > 0 ? index - 1 : tabs.length - 1;
            tabs[prevIndex].focus();
            this.switchTab(tabs, panels, prevIndex);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = index < tabs.length - 1 ? index + 1 : 0;
            tabs[nextIndex].focus();
            this.switchTab(tabs, panels, nextIndex);
          }
        });
      });

      // Previous/Next button handlers
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const currentIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
          this.switchTab(tabs, panels, prevIndex);
        });

        nextBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const currentIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('active'));
          const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
          this.switchTab(tabs, panels, nextIndex);
        });
      }
    });
  }

  switchTab(tabs, panels, targetIndex) {
    // Remove active class from all tabs and panels
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });

    panels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
    });

    // Add active class to target tab and panel
    tabs[targetIndex]?.classList.add('active');
    tabs[targetIndex]?.setAttribute('aria-selected', 'true');
    tabs[targetIndex]?.setAttribute('tabindex', '0');

    panels[targetIndex]?.classList.add('active');
    panels[targetIndex]?.setAttribute('aria-hidden', 'false');
  }
}
