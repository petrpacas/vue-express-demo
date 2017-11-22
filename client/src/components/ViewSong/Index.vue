<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 md6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs12 md6>
        <song-video :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex xs12 md6>
        <panel title="Tabs">
          <pre>{{song.tab}}</pre>
        </panel>
      </v-flex>
      <v-flex xs12 md6>
        <panel title="Lyrics">
          <pre>{{song.lyrics}}</pre>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
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
    SongMetadata,
    SongVideo
  }
}
</script>

<style scoped>
</style>
