<template>
  <Home />
  <div v-if="loading">Loading...</div>
  <div v-else>
    {{ one }}
  </div>
</template>

<script setup lang="ts">
import Home from './components/Home.vue';
import { useQuery, useQueryLoading } from '@vue/apollo-composable'
import gql from "graphql-tag";

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
  console.log(error)
})

const loading = useQueryLoading()


</script>

