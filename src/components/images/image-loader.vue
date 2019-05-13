<template>
   <image :src="src?src:loadImg" @load="bindload" @error="onLoadImageError" class="mage-loader"></image>
</template>
<script>
export default {
  name: 'image-loader',
  props: {
    src: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      loadImg: '/static/images/loading.gif',
      bg: '/static/images/loading-bg.gif',
      normal: '/static/images/loading.gif'
    }
  },
  mounted () {
    this.setImg()
  },
  methods: {
    bindload (e) {
    },
    onLoadImageError (e) {
      this.src = '/static/images/error.png'
    },
    setImg () {
      if (this.type === 'bg') {
        this.loadImg = this.bg
      } else {
        this.loadImg = this.normal
      }
    }
  },
  watch: {
    type (val) {
      this.setImg()
    }
  }
}
</script>


<style lang="scss" scoped>
.mage-loader{
  height: 100%;
}
</style>

