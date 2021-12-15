export interface KiteGatewayConfigOptions {
  port: number
}

export default {
  port: process.env.NODE_ENV.trim() === 'development' ? 4800 : 5000
} as KiteGatewayConfigOptions;