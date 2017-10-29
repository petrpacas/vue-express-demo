<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="elevation-2 white">
      <v-toolbar flat dense dark class="cyan">
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div class="px-4 py-2">
        <input v-model="email" type="email" name="email" placeholder="Email">
        <br>
        <input v-model="password" type="password" name="password" placeholder="Password">
        <div class="errors" v-html="error"></div>
        <v-btn class="cyan" @click="register">Submit</v-btn>
      </div>
    </div>
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
        console.log(response.data)
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
  margin: 30px 0;
}
</style>
