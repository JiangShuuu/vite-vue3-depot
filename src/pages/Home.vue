<template>
  <h1 class="mb-10 text-4xl">Home</h1>
  <div v-if="loading">Loading...</div>
  <div v-else>
    {{ one }}
  </div>
</template>

<script setup lang="ts">
import { useQuery, useQueryLoading } from '@vue/apollo-composable'
import gql from "graphql-tag";
import { useRouter } from 'vue-router'

const router = useRouter()

const GET_DATA = gql`
  query {
    allNews(
      first: 12
      page: 1
      display: true
      orderBy: { field: PUBLISHED_AT, order: DESC }
    ) {
      data {
        id
        title
      }
    }
  }
`

const { result: one, onError } = useQuery(GET_DATA);

onError((error) => {
  if (error) {
    router.push('/404')
  }
})

const loading = useQueryLoading()


</script>

