export interface RobotOption {
  /**
   * User-agent value.
   * Example: Googlebot
   */
  userAgent: string
  /**
   * Allowed routes for corresponding User-agent.
   * Example: '/'
   */
  allow?: string | string[]
  /**
   * Disallowed routes for corresponding User-agent.
   * Example: ['/admin', '/confidential']
   */
  disallow?: string | string[]
  /**
   * Crawl-delay option for robot.
   * Example: 2
   */
  crawlDelay?: number
  /**
   * Clean-param option for robot.
   * Example: 'ref /articles/'
   */
  cleanParam?: string
}

/**
 * Plugin options.
 */
interface Options {
  /**
   * Base URI
   * @default 'http://localhost/'
   */
  hostname: string
  /**
   * Array of strings with dynamic routes.
   * Example: ['/routes1', '/route2/sub-route']
   * @default []
   */
  dynamicRoutes: string[]
  /**
   * Array of strings with excluded routes.
   * Example: ['/routes1', '/route2/sub-route']
   * @default []
   */
  exclude: string[]
  /**
   * Output directory
   * @default 'dist'
   */
  outDir: string
  /**
   * Change frequency option for sitemap
   * @default null
   */
  changefreq: string | null
  /**
   * Priority option for sitemap
   * @default null
   */
  priority: number | null
  /**
   * Last modification option for sitemap
   * @default new Date()
   */
  lastmod: Date
  /**
   * Converts XML into a human readable format
   * @default false
   */
  readable: boolean
  /**
   * Robots policy
   * @default [{ userAgent: '*', allow: '/' }]
   */
  robots: RobotOption[]
  /**
   * Locales setting for mutil-lang pages
   * @default { '/': 'en' }
   */
  locales: Record<string, string>
}

export type UserOptions = Partial<Options>

export interface ResolvedOptions extends Options {}
