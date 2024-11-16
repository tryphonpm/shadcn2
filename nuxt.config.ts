// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon', 'nuxt-echarts'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'ph', 'line-md', 'material-symbols', 'ic'], // <!--- this
    },
  },
  echarts: {
    charts: ['BarChart', 'LineChart', 'PieChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent'],
    features: ['LabelLayout', 'UniversalTransition']
  },
});
