/*
 *音乐 接口
 */
import http from './http'

// 网易：'https://music.163.com'

// qq :  https://c.y.qq.com/musichall
export const api = 'https://c.y.qq.com/'

// 新歌
export const getNewSong = params => http.post(`${api}/weapi/personalized/newsong`, {
  params: 'e2/WH7bnRLWv2qa/fS7AAdi6zRZaTehSqIyULY2bEcs=',
  encSecKey: 'd17edd3c64ee73f3383c0dc0af5e05e098bc5003eb316ce20803310c65e95f08add5dc4e4e55d29a2c7bc8427d2d1bb1bcce25d9c9af4428bc54942c867a69e0a38dfb3ad4ae71438e04abe5e7ea3d8f90e6d79ae41170110f54865a58ff722036ca83a19a61f86ff74499d6d8aa396cc66d10f7f5054c6faaf99bc13620f9f1'
})

export const getHotList = params => http.get(`${api}/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`, {
  _: 1557712750470,
  g_tk: 5381,
  uin: 0,
  format: 'json',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  platform: 'h5',
  needNewCode: 1
})
