<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6 class="mr-2">
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn
            dark class="blue-grey"
            @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">
            Edit
          </v-btn>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <div class="song-album">{{song.album}}</div>
        <img class="album-image" :src="song.albumImageUrl">
        <br>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
font-size: 18px;
}

.song-album {
font-size: 24px;
}

.album-image {
  width: 75%;
  margin: 0 auto;
}
</style>
