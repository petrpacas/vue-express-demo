<template>
  <div>
    <v-layout>
      <v-flex xs6 class="mr-2">
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <song-video :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-4">
      <v-flex xs6 class="mr-2">
        <panel title="Tabs">
          <pre>{{song.tab}}</pre>
        </panel>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <panel title="Lyrics">
          <pre>{{song.lyrics}}</pre>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import SongVideo from './SongVideo'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    SongVideo
  }
}
</script>

<style scoped>
</style>
