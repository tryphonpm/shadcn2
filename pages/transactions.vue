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
            <highchart :options="chartOptions" />
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
const chartOptions = computed(() => ({
  chart: {
    type: 'area',
  },
  title: {
    text: 'Production, consumption and trade surplus of electrical power',
    align: 'left',
  },
  subtitle: {
    text:
      'Source: <a ' +
      'href="https://www.ssb.no/energi-og-industri/energi/statistikk/elektrisitet/artikler/lavere-kraftproduksjon"' +
      ' target="_blank">SSB</a>',
    align: 'left',
  },
  xAxis: {
    categories: [
      'Q1 2019',
      'Q2 2019',
      'Q3 2019',
      'Q4 2019',
      'Q1 2020',
      'Q2 2020',
      'Q3 2020',
      'Q4 2020',
      'Q1 2021',
      'Q2 2021',
      'Q3 2021',
    ],
  },
  yAxis: {
    title: {
      text: 'TWh',
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: 'Total production',
      data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7],
    },
    {
      name: 'Gross consumption',
      data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5],
    },
    {
      name: 'Trade surplus',
      data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2],
    },
  ],
}));
</script>
