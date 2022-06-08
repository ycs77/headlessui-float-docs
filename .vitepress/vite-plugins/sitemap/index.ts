// this plugin is fork from vite-plugin-sitemap, sitemap-ts
import { writeFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import format from 'xml-formatter'
import type { Plugin } from 'vite'

import { resolveOptions } from './options'
import { getRoutes, getFormattedSitemap } from './sitemap'
import { getContent, getRules } from './robots'
import { getResolvedPath } from './utils'
import type { UserOptions, ResolvedOptions } from './types'

async function generateSitemap(options: UserOptions = {}) {
  const resolvedOptions: ResolvedOptions = resolveOptions(options)

  // robots.txt
  const robotRules = getRules(resolvedOptions.robots)
  const robotContent = getContent(robotRules, resolvedOptions.hostname)
  writeFileSync(getResolvedPath('robots.txt', resolvedOptions), robotContent)

  // sitemap.xml
  const routes = await getRoutes(resolvedOptions)
  if (!routes.length) return
  const formattedSitemap = getFormattedSitemap(resolvedOptions, routes)

  const stream = new SitemapStream()
  formattedSitemap.forEach(item => stream.write(item))
  streamToPromise(stream).then((sitemap) => {
    const utfSitemap = sitemap.toString('utf-8')
    const formattedSitemap = resolvedOptions.readable ? format(utfSitemap) : utfSitemap
    writeFileSync(getResolvedPath('sitemap.xml', resolvedOptions), formattedSitemap)
  })
  stream.end()
}

function sitemapPlugin(options: UserOptions = {}): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    apply: 'build',
    enforce: 'post',
    closeBundle() {
      generateSitemap(options)
    },
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          injectTo: 'head',
          attrs: {
            rel: 'sitemap',
            type: 'application/xml',
            title: 'Sitemap',
            href: '/sitemap.xml',
          },
        },
      ]
    },
  }
}

export default sitemapPlugin
