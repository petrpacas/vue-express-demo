<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="white"
          light fab absolute right center small light>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6 class="mr-2">
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <v-btn dark class="blue-grey"
                @click="navigateTo({name: 'song', params: {songId: song.id}})">View more</v-btn>
            </v-flex>
            <v-flex xs6 class="ml-2">
              <img class="album-image" :src="song.albumImageUrl">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song + .song {
  padding-top: 40px;
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
  width: 75%;
  margin: 0 auto;
}
</style>
