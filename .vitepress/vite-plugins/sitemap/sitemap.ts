import { join, parse } from 'path'
import glob from 'fast-glob'
import type { ResolvedOptions } from './types'

export interface SitemapRoute {
  url: string
  changefreq?: string | null
  priority?: number | null
  lastmod?: Date
  route?: string
  links?: {
    lang: string
    url: string
  }[]
}

export async function getRoutes(options: ResolvedOptions) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    ...glob.sync('**/*.html', { cwd: options.outDir }).map((route) => {
      const parsedRoute = parse(route)
      return join('/', parsedRoute.dir, parsedRoute.base)
        .replace(/\\/g, '/')
        .replace(/\/index\.html/g, '/')
    }),
    ...options.dynamicRoutes.map(route => join('/', join(parse(route).dir, parse(route).name)).replace(/\\/g, '/')),
  ].filter(route => !options.exclude.includes(route))
}

export function getFormattedSitemap(options: ResolvedOptions, routes: string[]) {
  function getLocalePath(path: string) {
    const paths = Object.keys(options.locales)
    paths.sort((a, b) => b.length - a.length)
    return path.match(new RegExp(`(${paths.join('|')})`))?.[0]!
  }

  function getLang(localePath: string) {
    return options.locales[localePath]
  }

  function resolveDefaultLangPath(path: string, localePath: string) {
    if (localePath === '/') return path
    return path.replace(localePath, '/')
  }

  // 初始產生所有路徑
  const generatedRoutes = routes.map(route => {
    const url = new URL(route, options.hostname).href

    return {
      url,
      changefreq: options.changefreq,
      priority: options.priority,
      lastmod: options.lastmod,
      route,
    } as SitemapRoute
  })

  // 索引多語言頁面
  const langsRoutesMap = new Map<string, Record<string, string>>()
  generatedRoutes.forEach(sitemapRoute => {
    const route = sitemapRoute.route!
    const localePath = getLocalePath(route)
    const lang = getLang(localePath)
    const defaultLangPath = resolveDefaultLangPath(route, localePath)

    const record = langsRoutesMap.get(defaultLangPath) ?? {}
    record[lang] = sitemapRoute.url
    langsRoutesMap.set(defaultLangPath, record)
  })

  // 紀錄路由多語言路徑
  return generatedRoutes.map(sitemapRoute => {
    const route = sitemapRoute.route!
    const localePath = getLocalePath(route)
    const defaultLangPath = resolveDefaultLangPath(route, localePath)

    const record = langsRoutesMap.get(defaultLangPath) ?? {}
    if (Object.keys(record).length > 1) {
      sitemapRoute.links = Object
        .keys(record)
        .map(lang => ({ lang, url: record[lang] }))

      // sitemapRoute.links.push({
      //   lang: 'x-default',
      //   url: new URL(defaultLangPath, options.hostname).href,
      // })
    }

    return sitemapRoute
  })
}
