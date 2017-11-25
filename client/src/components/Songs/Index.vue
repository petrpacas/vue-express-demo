<template>
  <v-layout wrap>
    <v-flex xs12 md6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <songs-histories />
    </v-flex>
    <v-flex xs12 :class="{
      md6: isUserLoggedIn
    }">
      <songs-search-panel />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import SongsHistories from './SongsHistories'
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'

export default {
  components: {
    SongsBookmarks,
    SongsHistories,
    SongsSearchPanel,
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
