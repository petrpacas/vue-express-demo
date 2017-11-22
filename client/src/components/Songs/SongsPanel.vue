<template>
  <panel title="Songs">
    <v-btn light fab absolute right center small light class="white"
      slot="action" :to="{name: 'song-create'}">
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout wrap>
        <v-flex xs12 md6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn dark class="blue-grey"
            :to="{ name: 'song', params: { songId: song.id }}">
            View More
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <img class="album-image" :src="song.albumImageUrl">
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song + .song {
  border-top: 1px solid lightgray;
  padding-top: 20px;
  margin-top: 20px;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
font-size: 18px;
}

.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
