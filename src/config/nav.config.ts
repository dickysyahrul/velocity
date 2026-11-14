export interface RouteDefinition {
  /** URL path for the default locale, without slashes ('' = home). */
  path: string;
  /** Translated slugs for non-default locales. Falls back to `path`. */
  slugs?: Partial<Record<string, string>>;
  /** Set false for pages that only exist in the default locale. */
  localized?: boolean;
}

export const routes = {
  home: { path: '' },
  blog: { path: 'blog' },
  about: { path: 'about', slugs: { id: 'tentang-kami', es: 'sobre-nosotros', fr: 'a-propos' } },
  contact: { path: 'contact', slugs: { id: 'kontak', es: 'contacto' } },
  search: { path: 'search', slugs: { id: 'cari', es: 'buscar', fr: 'recherche' } },
  components: { path: 'components', localized: false },
} satisfies Record<string, RouteDefinition>;

export type RouteId = keyof typeof routes;

export interface NavItem {
  /** Translation key or plain text */
  label: string;
  order: number;
  /** Internal route (localized automatically) */
  route?: RouteId;
  /** Any other link: an absolute path, a #hash or an external URL */
  href?: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'nav.components', route: 'components', order: 1 },
  { label: 'nav.blog', route: 'blog', order: 2 },
  { label: 'nav.about', route: 'about', order: 3 },
  { label: 'nav.contact', route: 'contact', order: 4 },
  { label: 'nav.search', route: 'search', order: 5 },
];

export interface HeaderAction {
  icon: string;
  href: string;
  /** Translation key or plain text (used as the accessible name) */
  label: string;
  iconOnly?: boolean;
  target?: string;
}

export const headerConfig: {
  cta?: { label: string; href: string };
  actions: HeaderAction[];
  extraNav: NavItem[];
} = {
  cta: { label: 'nav.docs', href: 'https://docs.deployvelocity.com' },
  actions: [
    {
      icon: 'github',
      href: 'https://github.com/southwellmedia/velocity',
      label: 'nav.github',
      iconOnly: true,
      target: '_blank',
    },
  ],
  extraNav: [{ label: 'nav.features', href: '/#features', order: 0 }],
};

export const footerConfig: { extraLinks: NavItem[] } = {
  extraLinks: [
    { label: 'GitHub', href: 'https://github.com/southwellmedia/velocity', external: true, order: 100 },
    { label: 'License', href: 'https://github.com/southwellmedia/velocity/blob/main/LICENSE', external: true, order: 101 },
  ],
};

export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
