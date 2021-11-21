import { WechatyBuilder, log, ScanStatus, Contact } from 'wechaty';
import qrcodeTerminal from 'qrcode-terminal';
import { buildOptions } from './config/wechat';
import MessageAdapter from './kernel/MessageAdapter';
import onMessage from './kernel/dispatchMessage';

/** 给机器人注册指令 */
MessageAdapter.install();

const app = async (option: any) => {
  const vxbot = WechatyBuilder.build(option);
  /** 保存机器人instance, 方便调用wechaty自身提供的方法 */
  MessageAdapter.registerBot(vxbot);
  vxbot.on('scan', onScan);
  vxbot.on('login', onLogin);
  vxbot.on('message', onMessage);
  await vxbot.start();
};
// 199535
const onScan = (qrcode: string, status: number) => {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    qrcodeTerminal.generate(qrcode, { small: true }); // show qrcode on console

    const qrcodeImageUrl = [
      'https://wechaty.js.org/qrcode/',
      encodeURIComponent(qrcode),
    ].join('');

    log.info(
      'KiteVxBot',
      'onScan: %s(%s) - %s',
      ScanStatus[status],
      status,
      qrcodeImageUrl
    );
  } else {
    log.info('KiteVxBot', 'onScan: %s(%s)', ScanStatus[status], status);
  }
};
const onLogin = (user: Contact) => {
  log.info('KiteVxBot', '%s login', user);
};

app(buildOptions).catch(() => {
  log.error('KiteVxBot', 'running error: 😢😢😢😢😢');
});
