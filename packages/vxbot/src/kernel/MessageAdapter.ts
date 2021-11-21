import type { Message, Wechaty } from 'wechaty';
import { command } from '../config/wechat';

/**
 * 消息处理适配器
 */
export default class MessageAdapter {
  /** 用来存储注册好的机器人指令 */
  public static pipeline = new Map<string, Function>();

  private static instance: MessageAdapter;

  public static vxbot: Wechaty;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private  constructor() {}

  public static getInstance(): MessageAdapter {
    if (!this.instance) this.instance = new MessageAdapter();
    return this.instance;
  }

  public static install() {
    command.forEach(comm => {
      MessageAdapter.registerPipeline(comm.command, comm.handle);
    });
  }
  /**
   * 注册微信机器人能够处理的信息功能
   * @param key => 注册消息处理指令的名称
   * @param callback => 处理逻辑函数
   */
  public static registerPipeline(key: string, callback: Function) {
    MessageAdapter.pipeline.set(key, callback);
  }
  /**
   * 注册微信机器人的实例
   * @param vxbot
   */
  public static registerBot(vxbot: Wechaty) {
    this.vxbot = vxbot;
  }
  /**
   * 封装回复消息的方式，给所有的消息都打上水印
   * @param message 
   * @param content 
   * @returns 
   */
  public static send(message: Message, content: string): Promise<void | Message> {
    return message.say(`${content}${this.waterMark()}`);
  }
  /**
   * 给消息打上水印
   * @returns 
   */
  public static waterMark(): string {
    return '<br/>----🤖️🤖️🤖️🤖️🤖️🤖️----<br/>(此条消息来自: KiteVxBot💗💗💗)'
  }
}