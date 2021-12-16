import path from "path";

interface KiteGatewayConfigPathSetting {
  controllers: string,
  services: string,
  views: string
}
interface KiteGatewayConfigOptions {
  port: number,
  path: KiteGatewayConfigPathSetting
}

export default {
  port: process.env.NODE_ENV.trim() === 'development' ? 4800 : 5000,
  path: {
    controllers: path.join(__dirname, '../controllers/'),
    services: path.join(__dirname, '../services/'),
    views: path.join(__dirname, '../views')
  }
} as KiteGatewayConfigOptions;