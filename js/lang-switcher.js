// Language Switcher for DeepAtom Website
// Automatically detects browser language and allows manual switching

(function() {
  'use strict';

  // Language configuration
  const LANGUAGES = {
    en: { name: 'English', flag: '🇺🇸' },
    ru: { name: 'Русский', flag: '🇷🇺' }
  };

  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'deepatom_lang';

  // Page mappings
  const PAGE_MAPPINGS = {
    'index.html': { en: 'index.html', ru: 'index-ru.html' },
    'index-ru.html': { en: 'index.html', ru: 'index-ru.html' },
    'features.html': { en: 'features.html', ru: 'features-ru.html' },
    'features-ru.html': { en: 'features.html', ru: 'features-ru.html' },
    'download.html': { en: 'download.html', ru: 'download-ru.html' },
    'download-ru.html': { en: 'download.html', ru: 'download-ru.html' },
    'docs.html': { en: 'docs.html', ru: 'docs-ru.html' },
    'docs-ru.html': { en: 'docs.html', ru: 'docs-ru.html' },
    'faq.html': { en: 'faq.html', ru: 'faq-ru.html' },
    'faq-ru.html': { en: 'faq.html', ru: 'faq-ru.html' }
  };

  // Get current page name
  function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
  }

  // Get current language from page name
  function getCurrentLang() {
    const page = getCurrentPage();
    return page.includes('-ru.html') ? 'ru' : 'en';
  }

  // Get saved language preference
  function getSavedLang() {
    return localStorage.getItem(STORAGE_KEY) || null;
  }

  // Save language preference
  function saveLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Detect browser language
  function detectBrowserLang() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ru')) return 'ru';
    return 'en';
  }

  // Switch to a specific language
  function switchLanguage(targetLang) {
    const currentPage = getCurrentPage();
    const mapping = PAGE_MAPPINGS[currentPage];

    if (!mapping || !mapping[targetLang]) {
      console.warn('No mapping found for', currentPage, targetLang);
      return;
    }

    const targetPage = mapping[targetLang];
    saveLang(targetLang);
    
    // Always redirect when user explicitly clicks, even if already on target page
    // This ensures the dropdown closes and provides visual feedback
    window.location.href = targetPage;
  }

  // Initialize language switcher UI
  function initSwitcher() {
    const currentLang = getCurrentLang();
    
    // Create language switcher button
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" id="lang-toggle" aria-label="Switch language" title="Switch language">
        <span class="lang-flag">${LANGUAGES[currentLang].flag}</span>
        <span class="lang-code">${currentLang.toUpperCase()}</span>
      </button>
      <div class="lang-dropdown" id="lang-dropdown">
        <button class="lang-option" data-lang="en">
          <span class="lang-flag">${LANGUAGES.en.flag}</span>
          <span>${LANGUAGES.en.name}</span>
        </button>
        <button class="lang-option" data-lang="ru">
          <span class="lang-flag">${LANGUAGES.ru.flag}</span>
          <span>${LANGUAGES.ru.name}</span>
        </button>
      </div>
    `;

    // Insert into header actions
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
      headerActions.insertBefore(switcher, headerActions.firstChild);
    }

    // Add event listeners
    const toggleBtn = document.getElementById('lang-toggle');
    const dropdown = document.getElementById('lang-dropdown');

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });

    // Language option clicks
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.dataset.lang;
        if (targetLang !== currentLang) {
          switchLanguage(targetLang);
        }
      });
    });
  }

  // Auto-redirect on first visit if browser language is Russian
  function autoRedirect() {
    const savedLang = getSavedLang();
    const currentLang = getCurrentLang();
    
    // Only redirect if:
    // 1. No saved preference
    // 2. Browser language is Russian
    // 3. Currently on English page
    if (!savedLang && detectBrowserLang() === 'ru' && currentLang === 'en') {
      switchLanguage('ru');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initSwitcher();
      // autoRedirect(); // Uncomment to enable auto-redirect
    });
  } else {
    initSwitcher();
    // autoRedirect(); // Uncomment to enable auto-redirect
  }
})();
