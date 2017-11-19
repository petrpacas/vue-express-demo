<template>
  <panel title="Song Video">
    <div class="player-container">
      <iframe class="player" :src="'https://www.youtube.com/embed/' + youtubeId + '?rel=0'" frameborder="0" allowfullscreen></iframe>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
.player-container {
  position: relative;
  padding-bottom: 56.25%;
}

.player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
