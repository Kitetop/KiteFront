import type { Message } from 'wechaty';
import MessageAdapter from '../kernel/MessageAdapter';
import { command } from '../config/wechat';

export default async function dealHelp(msg: Message) {
  /** 消息格式：KiteBot:help */
  const message = command.map(comm => {
    return `指令📱 -> ${comm.command}<br/>` + 
      `描述🎩 -> ${comm.desc}<br/>` +
      `例子🌰 -> ${comm.example || comm.command}<br>`
  }).join('-----🌞🌞🌞-----<br/>');
  await MessageAdapter.send(msg, message);
}