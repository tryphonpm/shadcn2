<template>
  <div class="grid gap-4 w-full">
    <header class="flex items-start justify-between">
      <div class="grow">
        <h1>Transactions Dashboard</h1>
        <p>Transactions data displayed</p>
      </div>
      <div class="w-[64px] h-12 bg-slate-200"></div>
    </header>
    <main class="grid gap-2">
      <div class="flex items-center gap-4">
        <div v-for="(item, index) in 3" :keys="index" class="w-[100px] h-[20px] bg-slate-200"></div>
      </div>
      <section class="w-full h-[200px] bg-slate-200"></section>
    </main>
    <footer class="flex items-center gap-4">
      <div v-for="(item, index) in 3" :keys="index" class="bg-slate-200 w-full h-[64px]"></div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
