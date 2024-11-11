<template>
  <div>
    <div class="flex md:hidden z-50 items-center justify-between w-full h-full p-4">
      <Logo />
      <Icon
        name="mdi:hamburger"
        size="lg"
        style="color: red"
        class="z-50 cursor-pointer left-2 top-2"
        @click="open = true"
      />
      <div v-if="open" class="absolute top-0 left-0 z-50 w-full h-full h-screen bg-yellow-400">
        <SidebarMenu />
        <Icon
          name="mdi:close"
          size="lg"
          style="color: red"
          class="absolute z-50 cursor-pointer right-4 top-4"
          @click="open = false"
        />
      </div>
    </div>
    <div class="hidden md:flex w-[150px] h-screen flex flex-col border-r justify-between">
      <SidebarMenu />
      <div>usermenu</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(true);
</script>
