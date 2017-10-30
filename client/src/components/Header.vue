<template>
  <v-toolbar app fixed dark class="blue-grey">
    <v-toolbar-title class="home mr-4">
      <span @click="navigateTo('root')">TabTracker</span>
    </v-toolbar-title>
    <!-- TODO: Implement Me
    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>
     -->
    <v-spacer />
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo('login')">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo('register')">Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push({name: route})
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
