<template>
  <v-toolbar app fixed dark class="blue-grey">
    <v-toolbar-title class="home mr-4">
      <span @click="navigateTo('root')">TabTracker</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo('songs')">Songs</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo('login')">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo('register')">Register</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push({name: route})
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>
