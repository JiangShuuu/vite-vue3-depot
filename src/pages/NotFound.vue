<template>
  <h1 class="text-3xl">404</h1>
  <router-link to="/">Go to Home</router-link>
</template>

<script setup lang="ts">
import { useCookies } from '@vueuse/integrations/useCookies'
const cookies = useCookies(['locale'])
// 移除token
// document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
cookies.remove('token')

</script>