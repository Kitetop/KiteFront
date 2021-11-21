import { dealBeautyLetter } from '../command/letter';
import dealFinance from '../command/finance';
import dealHelp from '../command/help';
import { dealWeiboTopSearch } from '../command/weibo';
import { dealAstro } from '../command/astro';

export const buildOptions = {
  name: 'kite-vxbot',
  puppet: 'wechaty-puppet-wechat',
  puppetOptions: {
    timeout: 0,
  },
};

export const command = [
  {
    command: 'KiteBot:help',
    desc: '获得系统支持的所有命令',
    handle: dealHelp,
    example: ''
  },
  {
    command: 'KiteBot:金融',
    desc: '获得金融热点资讯，支持分页查询',
    handle: dealFinance,
    example: 'KiteBot:金融;KiteBot:金融@2'
  },
  {
    command: 'KiteBot:文案',
    desc: '获得优美的朋友圈文案',
    handle: dealBeautyLetter,
    example: ''
  },
  {
    command: 'KiteBot:微博热搜',
    desc: '获得实时的微博热搜榜',
    handle: dealWeiboTopSearch,
    example: ''
  },
  {
    command: 'KiteBot:星座',
    desc: '获得当日的星座运势',
    handle: dealAstro,
    example: 'KiteBot:星座@天蝎座'
  },
]
