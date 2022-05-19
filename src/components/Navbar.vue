<template>
  <nav className="flex sm:justify-center space-x-4">
    <div v-for="item in data" :key="item.id">
      <router-link :to="item.url" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{{item.title}}</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

class Link {
  id: number
  title: string
  url: string

  constructor(id: number, title: string, url: string) {
    this.id = id
    this.title = title
    this.url = url
  }
}

const data = reactive<any>([])

data.push(new Link(1, 'Home', '/'))
data.push(new Link(2, 'Login', '/login'))
data.push(new Link(3, '404', '/404'))

</script>