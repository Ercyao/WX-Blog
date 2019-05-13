/*
 *音乐 接口
 */
import http from './http'

export const api = 'https://music.163.com'

// 新歌
export const getNewSong = params => http.post(`${api}/weapi/personalized/newsong`, params)
