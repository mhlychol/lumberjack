import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/Melih/ders/2023 güz/lumberjack2/lumberjack/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}