<template>
  <v-card>
      <v-toolbar flat dark class="blue-grey">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>
      <div class="pa-4 text-xs-center">
        <slot>No content defined.</slot>
      </div>
  </v-card>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
