<template>
  <div>
    <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
      <Logo />
      <p class="font-bold">SHADCN Course</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <div
          v-for="(item, index) in items"
          :keys="index"
          class="flex items-center gap-2 px-2 py-1 rounded transition cursor-pointer hover:bg-slate-100"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  { title: 'Overview', path: '/overview' },
  { title: 'Transaction', path: '/transaction' },
  { title: 'Accounts', path: '/accounts' },
  { title: 'Contact', path: '/contact' },
  { title: 'Settings', path: '/settings' },
]);
</script>
