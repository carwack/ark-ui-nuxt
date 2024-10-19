<script lang="ts">
export interface AvatarProps extends AvatarRootProps {
  src?: string
  name: string
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first
import type { AvatarRootEmits, AvatarRootProps } from '@ark-ui/vue/avatar'

const props = defineProps<AvatarProps>()
const emits = defineEmits<AvatarRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const getInitials = computed(() =>
  props.name
    .split(' ')
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase(),
)
</script>

<template>
  <AvatarRoot v-bind="forwarded">
    <AvatarFallback>{{ getInitials }}</AvatarFallback>
    <AvatarImage
      :src="props.src"
      :alt="props.name"
    />
  </AvatarRoot>
</template>

<style scoped>
[data-scope='avatar'][data-part='root'] {
  width: 80px;
  height: 80px;
  border-radius: 9999px;
}

[data-scope='avatar'][data-part='image'] {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: inherit;
}

[data-scope='avatar'][data-part='fallback'] {
  width: 80px;
  height: 80px;
  font-size: 14px;
  line-height: 1;
  font-weight: 600;
  color: white;
  background-color: #777;
}

[data-scope='avatar'][data-part='fallback']:not([hidden]) {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
