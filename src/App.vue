<template>
  <v-app>
    <router-view />
    <CookieBanner />
  </v-app>
</template>

<script lang="ts" setup>
  import CookieBanner from '@/components/CookieBanner.vue'
</script>
