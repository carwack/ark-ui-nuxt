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
    // List of Ark UI components (e.g. AvatarRoot, AvatarImage, etc.)
    const arkComponents: [string, object][] = Object.entries(ArkUI).filter(([name, component]) =>
      name[0] === name[0].toUpperCase()
      && typeof component === 'object'
      && 'setup' in component,
    )

    // List of Ark UI component groups (e.g. Avatar, Button, etc.) used for the dot-notation (e.g. Avatar.Root)
    const arkComponentGroups = Object.entries(ArkUI).filter(([name, value]) =>
      name[0] === name[0].toUpperCase()
      && typeof value === 'object'
      && Object.values(value).some(component =>
        typeof component === 'object' && 'setup' in component,
      ),
    ).map(([name]) => name)

    // Add Ark components to the auto-imports
    for (const [name] of arkComponents) {
      addComponent({
        name,
        export: name,
        filePath: '@ark-ui/vue',
      })
    }

    // Add Ark component groups to the auto-imports
    // This are imports since they are objects containing Vue components.
    addImportsSources({
      from: '@ark-ui/vue',
      imports: arkComponentGroups,
    })

    // Add imports for the utils. Follows this list: https://github.com/chakra-ui/ark/blob/334cf29dc854d6f8af1e8a240610d8e5bcc63145/packages/vue/src/index.ts#L3
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
