<template>
  <div class="music-container">
  </div>
</template>

<script>
import { getNewSong } from '@/pages/api/music'
export default {
  components: {

  },

  data () {
    return {
      data: null

    }
  },

  created () {
    console.log(433434)
    this.getPListApi()
  },
  methods: {
    // async getPListApi () {
    //   console.log(3434)
    //   const data = await getPList()
    //   console.log(555, data)
    // },
    // async getPListApi () {
    //   try {
    //     const { data } = await getPList()
    //     console.log(4554)
    //     console.log(data)
    //   } catch (e) {

    //   }
    // }
    getPListApi () {
      getNewSong().then(res => {
        console.log(4554)
      })
    }
  }
}
</script>

<style>

</style>
