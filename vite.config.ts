import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import viteCompression from 'vite-plugin-compression'
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // MOCK
    viteMockServe({
      mockPath: './src/mock/', //mock文件地址
      localEnabled: true, // 开发打包开关
      prodEnabled: false, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      supportTs: false, //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件 ,
      logger: false //是否在控制台显示请求日志
    }),

    // GIZP
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  base: './', // 打包路径
  server: {
    //port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
