<template>
  <div>
    <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
      <Logo />
      <span class="font-bold leading-4">SHADCN Course</span>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          :to="item.path"
          v-for="(item, index) in items"
          :keys="index"
          class="flex items-center gap-2 px-2 py-1 rounded transition cursor-pointer hover:bg-slate-100"
        >
          <Icon :name="item.icon" style="color: orange" />
          <p>{{ item.title }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  { title: 'Overview', path: '/', icon: 'material-symbols:dashboard' },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: 'material-symbols:app-registration-outline',
  },
  { title: 'Table', path: '/table', icon: 'material-symbols:account-circle' },
  { title: 'DataTable', path: '/datatable', icon: 'material-symbols:account-circle' },
  { title: 'Contact', path: '/contact', icon: 'mdi:comment-search-outline' },
  { title: 'Settings', path: '/settings', icon: 'ic:twotone-settings' },
]);
</script>
