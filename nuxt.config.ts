// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],


  // Uncomment when deploying
  app: {
    baseURL: '/mm-personal-portfolio/',
    buildAssetsDir: 'assets',
  }
})
