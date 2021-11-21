import { getFinanceInfo } from '../api/tx/index';
import type { Message } from 'wechaty';
import MessageAdapter from '../kernel/MessageAdapter';

export default function dealFinance(msg: Message) {
  /** 消息格式：KiteBot:金融@1 */
  const text = msg.text();
  /** 提取出指令中的参数数控 */
  const regex = /@[0-9]+/.exec(text);
  const page = regex ? (regex[0] as string).slice(1) : 1;
  getFinanceInfo({
    page: Number(page)
  }).then(async(data) => {
    const message = data.newslist.map(news => {
      return (`<span>[来源: ${news.source}]🍃🍃🍃 ${news.title}(${news.url})</span>`)
    }).join('<br/>');
    await MessageAdapter.send(msg, message);
  })
}