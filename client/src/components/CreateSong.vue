<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Details" class="mr-2">
        <v-text-field label="Title" v-model="song.title" required :rules="[required]" />
        <v-text-field label="Artist" v-model="song.artist" required :rules="[required]" />
        <v-text-field label="Genre" v-model="song.genre" required :rules="[required]" />
        <v-text-field label="Album" v-model="song.album" required :rules="[required]" />
        <v-text-field label="Album Image Url" v-model="song.albumImageUrl" required :rules="[required]" />
        <v-text-field label="Youtube Id" v-model="song.youtubeId" required :rules="[required]" />
      </panel>
    </v-flex>
    <v-flex xs6>
      <panel title="Song Lyrics and Tab" class="ml-2">
        <v-text-field multi-line label="Lyrics" v-model="song.lyrics" required :rules="[required]" />
        <v-text-field multi-line label="Tab" v-model="song.tab" required :rules="[required]" />
        <div class="errors" v-html="error"></div>
        <v-btn dark class="blue-grey" @click="create">Create Song</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const fieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!fieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await SongsService.create(this.song)
        this.$router.push({name: 'songs'})
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.errors {
  color: red;
}
</style>
