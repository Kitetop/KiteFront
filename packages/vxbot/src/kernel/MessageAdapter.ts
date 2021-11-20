/**
 * 消息处理适配器
 */
export default class MeesageAdapter {
  /** 用来存储注册好的机器人指令 */
  public static pipeline = new Map<string, Function>();

  private static instance: MeesageAdapter | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private  constructor() {}

  public static getInstance(): MeesageAdapter {
    if (!this.instance) this.instance = new MeesageAdapter();
    return this.instance;
  }
  /**
   * 注册微信机器人能够处理的信息功能
   * @param key => 注册消息处理指令的名称
   * @param callback => 处理逻辑函数
   */
  public registerPipeline(key: string, callback: Function) {
    MeesageAdapter.pipeline.set(key, callback);
  }
}