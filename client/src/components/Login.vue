<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-card>
          <v-toolbar flat dark class="blue-grey">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <form name="tab-tracker-login" class="pa-4 text-xs-center">
            <v-text-field label="Email" v-model="email" />
            <v-text-field label="Password" type="password" v-model="password" />
            <div class="errors" v-html="error"></div>
            <v-btn dark class="blue-grey" @click="login">Login</v-btn>
          </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.errors {
  color: red;
}
</style>
