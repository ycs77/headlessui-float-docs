import type { DefaultTheme } from 'vitepress/theme'

export interface Config extends DefaultTheme.Config {
  /**
   * The frameworks nav items.
   */
  frameworksNav?: NavItemWithFramework[]
}

export type NavItemWithFramework = DefaultTheme.NavItemWithLink & { name: string }
