import { getStartLucky } from '../api/tx/index';
import type { Message } from 'wechaty';
import MessageAdapter from '../kernel/MessageAdapter';

export async function dealAstro(msg: Message) {
  /** 消息格式：KiteBot:星座@白羊座 */
  const text = msg.text();
  /** 提取出指令中的参数数控 */
  const regex = /@.+/.exec(text);
  const astroes = ['白羊座', '金牛座', '双子座', '巨蟹座','狮子座','处女座', '天秤座',
    '天蝎座', '射手座','摩羯座','水瓶座','双鱼座']
  const astro = regex ? (regex[0] as string).slice(1) : '';
  if (!astroes.includes(astro)) {
    await MessageAdapter.send(msg, '⚠️ 输入的是非法的星座名！');
    return;
  }
  getStartLucky(astro).then(async(data) => {
    const message = data.newslist.map(news => {
      return (`${news.type}: ${news.content}`)
    }).join('<br/>');
    await MessageAdapter.send(msg, message);
  })
}