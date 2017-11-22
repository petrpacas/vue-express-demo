<template>
  <v-layout>
    <v-flex>
      <songs-search-panel />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'

export default {
  components: {
    SongsSearchPanel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
