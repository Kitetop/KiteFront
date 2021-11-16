import { WechatyBuilder, log, ScanStatus, Contact } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";
import { buildOptions } from './config/wechat';


const app = async (option: any) => {
  const vxbot = WechatyBuilder.build(option);
  vxbot.on("scan", onScan);
  vxbot.on("login", onLogin);
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
      "StarterBot",
      "onScan: %s(%s) - %s",
      ScanStatus[status],
      status,
      qrcodeImageUrl
    );
  } else {
    log.info("StarterBot", "onScan: %s(%s)", ScanStatus[status], status);
  }
};
const onLogin = (user: Contact) => {
  log.info("StarterBot", "%s login", user);
};
app({}).catch(() => {
  log.error("😢😢😢😢😢：臣妾办不到啊！");
});