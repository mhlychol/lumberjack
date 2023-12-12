import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "D:/Melih/ders/2023 güz/lumberjack2/lumberjack/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}