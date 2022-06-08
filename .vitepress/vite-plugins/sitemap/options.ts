import type { UserOptions, ResolvedOptions } from './types'

export function resolveOptions(userOptions: UserOptions): ResolvedOptions {
  return Object.assign({
    hostname: 'http://localhost/',
    dynamicRoutes: [],
    exclude: [],
    outDir: 'dist',
    changefreq: null,
    priority: null,
    lastmod: new Date(),
    readable: false,
    robots: [{
      userAgent: '*',
      allow: '/',
    }],
    locales: { '/': 'en' },
  }, userOptions)
}
