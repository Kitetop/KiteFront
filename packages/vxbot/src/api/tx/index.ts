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