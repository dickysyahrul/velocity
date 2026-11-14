/**
 * Enabled locales — the single source of truth for routing, the language
 * switcher, hreflang, the sitemap and Astro's `i18n` config.
 *
 * Plain JS (not TS) so astro.config.mjs can import it too.
 *
 * Indonesian is the default language; English is available under /en/.
 */

/** @type {'id' | 'en'} */
export const defaultLocale = 'id';

/** @type {readonly ['id', 'en']} */
export const locales = /** @type {const} */ (['id', 'en']);
