// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon', 'nuxt-highcharts', ['@pinia/nuxt',{ autoImports: ['defineStore', 'AcceptHMRUpdate'],},]
],
imports: { dirs: ['stores', 'stores/*'],},
alias: { pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',},

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'ph', 'line-md', 'material-symbols', 'ic'], // <!--- this
    },
  },
  /*   echarts: {
    charts: ['BarChart', 'LineChart', 'PieChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent'],
    features: ['LabelLayout', 'UniversalTransition']
  }, */
});