/**
 * Navigation Module
 * Handles responsive navigation menu with dropdown functionality
 */
export class Navigation {
  constructor() {
    this.menu = document.querySelector('.nav-menu');
    this.toggle = document.querySelector('.nav-toggle');
    this.dropdowns = document.querySelectorAll('.dropdown');
    this.init();
  }

  init() {
    // Mobile menu toggle
    if (this.toggle) {
      this.toggle.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleMobileMenu();
      });
    }

    // Dropdown interactions
    this.dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.dropdown-trigger');

      // Keyboard navigation
      trigger?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleDropdown(dropdown);
        } else if (e.key === 'Escape') {
          this.closeAllDropdowns();
        }
      });

      // Mouse interactions
      trigger?.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleDropdown(dropdown);
      });

      // Touch-friendly hover for desktop
      if (window.innerWidth >= 768) {
        dropdown.addEventListener('mouseenter', () => {
          this.openDropdown(dropdown);
        });

        dropdown.addEventListener('mouseleave', () => {
          this.closeDropdown(dropdown);
        });
      }
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown') && !e.target.closest('.nav-toggle')) {
        this.closeAllDropdowns();
      }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768) {
          this.menu?.classList.remove('mobile-open');
        }
      }, 250);
    });
  }

  toggleMobileMenu() {
    this.menu?.classList.toggle('mobile-open');
    const isOpen = this.menu?.classList.contains('mobile-open');
    this.toggle?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleDropdown(dropdown) {
    const isOpen = dropdown.classList.contains('open');

    // Close all other dropdowns first
    this.closeAllDropdowns();

    // Toggle the clicked dropdown
    if (!isOpen) {
      this.openDropdown(dropdown);
    }
  }

  openDropdown(dropdown) {
    dropdown.classList.add('open');
    dropdown.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'true');
  }

  closeDropdown(dropdown) {
    dropdown.classList.remove('open');
    dropdown.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
  }

  closeAllDropdowns() {
    this.dropdowns.forEach(dropdown => {
      this.closeDropdown(dropdown);
    });
  }
}
