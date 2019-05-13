<template>
  <div class="music-container">

    <swiper v-if="list.slider.length > 0" indidator-dots="list.slider.length > 1" >
      <block v-for="(item, index) in list.slider" :key="index" >
        <swiper-item>
          <image :src="item.picUrl" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>


    <section class="music-box">
      <p class="music-list-title">电台</p>
      <ul class="music-list">
        <li v-for="(item,index) in list.radioList" :key="index" class="music-list-item">
          <div class="music-list-item-top">
            <Imageloader :src="item.picUrl"></Imageloader>
<span class="music-list-item-top-tag"><i class="iconfont iconbofanganniu"></i></span>
            
          </div>
          <div class="music-list-item-bottom">{{item.Ftitle}}</div>
        </li>
      </ul>
    </section>

    <section class="music-box">
      <p class="music-list-title">热门歌单</p>
      <ul class="music-list">
        <li v-for="(item,index) in list.songList" :key="index" class="music-list-item">
          <div class="music-list-item-top">
            <Imageloader :src="item.picUrl"></Imageloader>
          </div>
          <div class="music-list-item-bottom">{{item.songListDesc}}</div>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import { getHotList } from '@/pages/api/music'
import Imageloader from '@/components/images/image-loader'
export default {
  components: {
    Imageloader
  },

  data () {
    return {
      data: null,
      list: []
    }
  },

  created () {
    this.getPListApi()
  },
  methods: {
    async getPListApi () {
      const { data } = await getHotList()
      this.list = data
      console.log(555, data)
    }
  }
}
</script>

<style lang="scss" scoped>
.music-container {
  .music-box {
    margin-left: 3%;
    .music-list-title{
          font-size: 16px;
    color: #000;
    margin-bottom: 11px;
    font-weight: 400;
    }
    .music-list {
      display: flex;
      flex-flow: row wrap;
      &-item {
        width: 47%;
        margin-right: 3%;
        margin-bottom: 20px;
        background: #fff;
        &-top {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
          &-img {
            height: 100%;
          }
          &-tag{

          }
        }
        &-bottom {
          font-size: 14px;
              height: 36px;
    line-height: 18px;
      padding: 5px 7px;
   display: -webkit-box;
    overflow: hidden;
    -webkit-lin-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
                
    
        }
      }
    }
  }
}
</style>
