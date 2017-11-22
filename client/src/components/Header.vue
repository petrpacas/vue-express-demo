<template>
  <v-toolbar app fixed dark class="blue-grey">
    <v-toolbar-title class="home mr-4">
      <router-link tag="span" :to="{ name: 'songs' }">TabTracker</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark :to="{ name: 'songs' }">Songs</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{ name: 'login' }">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark :to="{ name: 'register' }">Register</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
