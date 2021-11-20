import { Message, log } from 'wechaty';
import MeesageAdapter from './MessageAdapter';

export default async function onMessage(msg: Message) {
  log.info(
    'Message from %s',
    'Message content %s',
    msg.talker(),
    msg.text()
  );
  const text = msg.text().split('@')[0];
  if (!text.includes('KiteBot')) return;
  if (MeesageAdapter.pipeline.has(text)) {
    const callback = MeesageAdapter.pipeline.get(text);
    if (callback) {
      callback(msg);
      return;
    }
  }
  await msg.say('机器人无法提供你刚才说的服务😢:(此条消息来自: KiteVxBot💗💗💗)');
}