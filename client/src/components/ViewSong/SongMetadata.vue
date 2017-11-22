 <template>
  <panel title="Song Metadata">
    <v-layout wrap>
      <v-flex xs12 md6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-genre">{{song.genre}}</div>
          <v-btn dark class="blue-grey"
            :to="{ name: 'song-edit', params () { return { songId: song.id}}}">
            Edit
          </v-btn>
          <v-btn v-if="isUserLoggedIn && !bookmark" dark class="blue-grey"
            @click="addBookmark">
            Add Bookmark
          </v-btn>
          <v-btn v-if="isUserLoggedIn && bookmark" dark class="blue-grey"
            @click="removeBookmark">
            Remove Bookmark
          </v-btn>
      </v-flex>
      <v-flex xs12 md6>
        <div class="song-album">{{song.album}}</div>
        <img class="album-image" :src="song.albumImageUrl">
        <br>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async addBookmark () {
      try {
        const bookmark = {
          songId: this.song.id,
          userId: this.$store.state.user.id
        }
        this.bookmark = (await BookmarksService.post(bookmark)).data
      } catch (err) {
        console.log(err)
      }
    },
    async removeBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
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
