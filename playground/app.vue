<script setup lang="ts">
const value = 1450.45
</script>

<template>
  <div>
    File size:
    <!-- TODO: fix error when using dot-notation: Property 'Avatar' does not exist on type 'CreateComponentPublicInstanceWithMixins<ToResolvedProps<{}, {}>, { value: typeof value; }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ... 18 more ..., {}>' -->
    <Format.Byte :value="value" />
    <br>
    <Highlight
      query="ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    />
    <h1>Ark UI Components Demo</h1>
    <AvatarRoot>
      <AvatarImage
        src="https://i.pravatar.cc/3000"
        alt="avatar"
      />
      <AvatarFallback>PA</AvatarFallback>
    </AvatarRoot>
    <!-- TODO: fix error when using dot-notation: Property 'Avatar' does not exist on type 'CreateComponentPublicInstanceWithMixins<ToResolvedProps<{}, {}>, { value: typeof value; }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, ... 18 more ..., {}>' -->
    <Avatar.Root>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image
        src="https://i.pravatar.cc/3000"
        alt="avatar"
      />
    </Avatar.Root>
    <NuxtAvatar
      name="John Doe"
      src="https://i.pravatar.cc/3000"
    />
  </div>
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
