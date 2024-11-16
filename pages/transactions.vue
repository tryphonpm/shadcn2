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
      <!--       <div class="flex items-center gap-4">
        <div v-for="(item, index) in 3" :keys="index" class="w-[100px] h-[20px] bg-slate-200"></div>
      </div> -->

      <Tabs default-value="today" class="w-[400px]">
        <TabsList>
          <div v-for="(t, index) in tabList" :keys="index">
            <TabsTrigger :value="t.title" class="tabsTrigger">
              {{ t.label }}
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="today">
          <div class="w-full">
            <ChartsEcharts1 />
          </div>
        </TabsContent>
      </Tabs>

      <section class="w-full h-[200px] bg-slate-200"></section>
    </main>
    <footer class="flex items-center gap-4">
      <div v-for="(item, index) in 3" :keys="index" class="bg-slate-200 w-full h-[64px]"></div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const tabList = [
  {
    title: 'today',
    label: "AUJOURD'HUI",
    component: resolveComponent('ChartsEcharts1'),
  },
  {
    title: 'week',
    label: 'CETTE SEMAINE',
    component: '<div>THIS WEEK</div>',
  },
  {
    title: 'month',
    label: 'CE MOIS',
    component: '<div>THIS MONTH</div>',
  },
  {
    title: 'year',
    label: 'CETTE ANNEE',
    component: '<div>THIS YEAR</div>',
  },
];
</script>
