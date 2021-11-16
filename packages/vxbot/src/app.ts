import { WechatyBuilder, log, ScanStatus, Contact, Message } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";
import { buildOptions } from './config/wechat';


const app = async (option: any) => {
  const vxbot = WechatyBuilder.build(option);
  vxbot.on('scan', onScan);
  vxbot.on('login', onLogin);
  vxbot.on('message', onMessage);
  await vxbot.start();
};

const onScan = (qrcode: string, status: number) => {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    qrcodeTerminal.generate(qrcode, { small: true }); // show qrcode on console

    const qrcodeImageUrl = [
      "https://wechaty.js.org/qrcode/",
      encodeURIComponent(qrcode),
    ].join("");

    log.info(
      'KiteVxBot',
      'onScan: %s(%s) - %s',
      ScanStatus[status],
      status,
      qrcodeImageUrl
    );
  } else {
    log.info("KiteVxBot", "onScan: %s(%s)", ScanStatus[status], status);
  }
};
const onLogin = (user: Contact) => {
  log.info("KiteVxBot", "%s login", user);
};

const onMessage = (message: Message) => {
  log.info(
    'Message from %s',
    'Message content %s',
    message.talker(),
    message.text()
  )
}
app(buildOptions).catch(() => {
  log.error(
    'KiteVxBot',
    'running error: 😢😢😢😢😢'
  )
});