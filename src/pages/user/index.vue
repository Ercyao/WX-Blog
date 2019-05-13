<template>
  <div class="user-container">
    <div class="user-top">
      <div class="user-top-swiper">
          <Imageloader :src="imgUrl" type="bg"></Imageloader>
      </div>
      <div class="user-top-userinfo">
          <i-avatar src="/static/images/user.png" size="large"></i-avatar>
      </div>
    </div>
    <div class="user-bottom">
        <i-steps :current="verticalCurrent" direction="vertical">
    <i-step>
        <div slot="title">
              已完成
        </div>
        <div slot="content">
            这里是该步骤的描述信息
        </div>
    </i-step>
    <i-step>
        <div slot="title">
            进行中
        </div>
        <div slot="content">
            这里是该步骤的描述信息
        </div>
    </i-step>
    <i-step>
        <div slot="title">
            错误
        </div>
        <div slot="content">
            这里是该步骤的描述信息
        </div>
    </i-step>
    <i-step>
        <div slot="title">
            错误
        </div>
        <div slot="content">
            这里是该步骤的描述信息
        </div>
    </i-step>
    <i-step>
        <div slot="title">
            错误
        </div>
        <div slot="content">
            这里是该步骤的描述信息
        </div>
    </i-step>
    <i-step>
        <div slot="title">
            错误
        </div>
        <div slot="content">
            这里是该步骤的描述信息
        </div>
    </i-step>
</i-steps>
        
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import Imageloader from '@/components/images/image-loader'

export default {
  components: {
    card,
    Imageloader
  },
  data () {
    return {
      logs: [],
      imgUrl: '',
      current: 2,
      verticalCurrent: 2
    }
  },
  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({ key: 'logs' }).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.user-container {
  .user-top {
    position: relative;
    width: 100%;
    height: 100%;
    &-swiper{

    }
    &-userinfo{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
    }
  }
  .user-bottom {
  }
}
</style>




