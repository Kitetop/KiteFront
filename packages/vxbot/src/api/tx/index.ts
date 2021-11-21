import { request, TxResponseBody } from './config';

interface TxFinanceInfoParams {
  num: number,
  page: number,
  rand: number, // 是否随机获取
  word: string
}

interface TxFinanceInfoData {
  id: string,
  ctime: string,
  title: string,
  description: string,
  source: string,
  picUrl: string,
  url: string
}

interface TxFinanceResponseBody extends TxResponseBody {
  newslist: TxFinanceInfoData[]
}

interface TxBeautyLetterInfoData {
  content: string,
  source: string
}

interface TxBeautyLetterResponseBody extends TxResponseBody {
  newslist: TxBeautyLetterInfoData[]
}

interface TxWeiboTopSearchData {
  hotword: string,
  hotwordnum: number,
  hottag: string
}

interface TxWeiboTopSearchResponseBody extends TxResponseBody {
  newslist: TxWeiboTopSearchData[]
}

interface TxStartData {
  type: string,
  content: string
}

interface TxStarAstroResponseBody extends TxResponseBody {
  newslist: TxStartData[]
}
/**
 * 
 * @param params 获得每日财经资讯
 * @returns 
 */
export const getFinanceInfo = (params: Partial<TxFinanceInfoParams>) => {
  params.num = params.num || 3;
  return request({
    url: '/caijing/index',
    method: 'get',
    params
  }).then(({ data }) => {
    return data as TxFinanceResponseBody;
  })
}
/**
 * 获得朋友圈精选文案
 * @returns
 */
export const getBeautyLetter = () => {
  return request({
    url: '/pyqwenan/index',
    method: 'get'
  }).then(({ data }) => {
    return data as TxBeautyLetterResponseBody
  })
}
/**
 * 获得微博热搜排行
 * @returns
 */
export const getWeiboTopSearch = () => {
  return request({
    url: '/weibohot/index',
    method: 'get'
  }).then(({ data }) => {
    return data as TxWeiboTopSearchResponseBody
  })
}
/**
 * 获得当天的星座运势
 * @param name 
 * @returns 
 */
export const getStartLucky = (name: string) => {
  return request({
    url: '/star/index',
    method: 'get',
    params: { astro: name }
  }).then(({ data }) => {
    return data as TxStarAstroResponseBody;
  })
}