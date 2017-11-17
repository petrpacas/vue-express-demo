<template>
  <v-app light>
    <page-header />
    <main>
      <v-container fluid>
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
main {
  padding-top: 64px;
  z-index: 1;
}
</style>
