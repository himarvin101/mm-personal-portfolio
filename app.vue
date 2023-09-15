<script setup>
import '@/assets/stylesheets/font.scss'
import '@/assets/stylesheets/main.scss'

useSeoMeta({
  title: 'This is me Portfolio | Marvin Marinduque',
  description: 'Hey you, yeah..',
  ogTitle: 'Something',
  ogDescription: 'Something',
  ogImage: '@/assets/favicon.ico',
  ogUrl: 'https://himarvin101.github.io/mm-personal-portfolio/',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '@/assets/favicon.ico'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>