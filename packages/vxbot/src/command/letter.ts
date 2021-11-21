import { getBeautyLetter } from '../api/tx/index';
import type { Message } from 'wechaty';
import MessageAdapter from '../kernel/MessageAdapter';

export function dealBeautyLetter(msg: Message) {
  /** 消息格式：KiteBot:文案 */
  getBeautyLetter().then(async(data) => {
    const message = data.newslist.map(news => {
      return (`<span>🦄️🦄️🦄️: ${news.content}<br/>---- 作者 ${news.source}</span>`)
    }).join('<br/>');
    await MessageAdapter.send(msg, message);
  })
}

// export function dealOneDate(msg: Message) {
//   /** 消息格式：KiteBot:每日一句 */
// }