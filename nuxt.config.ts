// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'ph', 'line-md'], // <!--- this
    },
  },
});
