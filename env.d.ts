declare module '@vue/theme/config' {
  import { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}

declare module '@vue/theme/highlight' {
  const createHighlighter: () => Promise<(input: string) => string>
  export default createHighlighter
}

declare module '@docsearch/js' {
  function docsearch<T = any>(props: T): void
  export default docsearch
}
