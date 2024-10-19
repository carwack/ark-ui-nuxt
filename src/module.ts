import { addComponent, defineNuxtModule, addImportsSources } from '@nuxt/kit'
import * as ArkUI from '@ark-ui/vue'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'arkUINuxt',
    compatibility: {
      nuxt: '^3.13.2',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    for (const [name] of Object.entries(ArkUI)) {
      if (name[0] === name[0].toUpperCase()) {
        // Only add components that start with a capital letter
        addComponent({
          name,
          export: name,
          filePath: '@ark-ui/vue',
        })
      }
    }

    // Add imports for the utils.
    addImportsSources({
      from: '@ark-ui/vue',
      imports: [
        'useEmitAsProps',
        'useForwardProps',
        'useForwardPropsEmits',
        'useForwardExpose',
      ],
    })
  },
})
