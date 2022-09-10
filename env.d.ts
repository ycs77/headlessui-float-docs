/// <reference types="vite/client" />

declare const __ALGOLIA__: boolean

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vitepress/dist/client/theme-default/composables/nav.js' {
  import type { Ref, ComputedRef } from 'vue'
  import type { DefaultTheme } from 'vitepress/theme'
  export function useNav(): {
    isScreenOpen: Ref<boolean>;
    openScreen: () => void;
    closeScreen: () => void;
    toggleScreen: () => void;
  }
  export function useLanguageLinks(): ComputedRef<DefaultTheme.NavItemWithChildren | null>
}

declare module 'vitepress/dist/client/theme-default/composables/sidebar.js' {
  import type { Ref, ComputedRef } from 'vue'
  export function useSidebar(): {
    isOpen: Ref<boolean>
    sidebar: ComputedRef<any>
    hasSidebar: ComputedRef<boolean>
    hasAside: ComputedRef<boolean>
    open: () => void
    close: () => void
    toggle: () => void
  }
  export function useCloseSidebarOnEscape(isOpen: any, close: any): void
}
