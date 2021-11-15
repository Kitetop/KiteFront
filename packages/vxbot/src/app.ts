import { WechatyBuilder, log, ScanStatus, Contact } from 'wechaty';
import qrcodeTerminal from 'qrcode-terminal'

const options = {
    name: "wechat-bot",
    /**
     * How to set Wechaty Puppet Provider:
     *
     *  1. Specify a `puppet` option when instantiating Wechaty. (like `{ puppet: 'wechaty-puppet-padlocal' }`, see below)
     *  1. Set the `WECHATY_PUPPET` environment variable to the puppet NPM module name. (like `wechaty-puppet-padlocal`)
     *
     * You can use the following providers:
     *  - wechaty-puppet-wechat (no token required)
     *  - wechaty-puppet-padlocal (token required)
     *  - wechaty-puppet-service (token required, see: <https://wechaty.js.org/docs/puppet-services>)
     *  - etc. see: <https://github.com/wechaty/wechaty-puppet/wiki/Directory>
     */
    puppet: "wechaty-puppet-wechat",
    puppetOptions: {
      timeout: 0,
    },
  };
const app = async (option: any) => {
    const vxbot = WechatyBuilder.build(option);
    vxbot.on('scan', onScan)
    vxbot.on('login', onLogin);
    await vxbot.start();
}

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
  }
  const onLogin = (user: Contact) => {
    log.info('StarterBot', '%s login', user)
  }
app(options).catch(() => {
    log.error('😢😢😢😢😢：臣妾办不到啊！')
})