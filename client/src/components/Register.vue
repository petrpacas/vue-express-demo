<template>
  <v-layout>
    <v-flex lg6 offset-lg3>
      <panel title="Register">
        <form name="tab-tracker-register">
          <v-text-field label="Email" v-model="email" />
          <v-text-field label="Password" type="password" v-model="password" />
          <div class="errors" v-html="error"></div>
          <v-btn dark class="blue-grey" @click="register">Register</v-btn>
        </form>
      </panel>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
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
