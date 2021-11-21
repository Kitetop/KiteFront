import MessageAdapter from '../kernel/MessageAdapter';
import type { Message } from 'wechaty';
import { getWeiboTopSearch } from '../api/tx';

export function dealWeiboTopSearch(msg: Message) {
  /** 消息格式：KiteBot:微博热搜 */
  getWeiboTopSearch().then(async(data) => {
    const message = data.newslist.map((news, index) => {
      return `${news.hottag === '热' ? '🔥' : '♨️'} ${index}、${news.hotword}<br/>`
    }).slice(0, 10).join('-----🌞🌞🌞-----<br/>');
    await MessageAdapter.send(msg, message);
  })
}