import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
import { viteMockServe } from 'vite-plugin-mock'
import legacy from '@vitejs/plugin-legacy'

const localEnabled: boolean = process.env.NODE_ENV === 'development' ? !process.env.VITE_APP_MOCK : false
const prodEnabled: boolean = process.env.NODE_ENV === 'production' ? !process.env.VITE_APP_MOCK : false

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // MOCK
    viteMockServe({
      mockPath: './src/mock/', // mock文件地址
      localEnabled, // 开发打包开关
      prodEnabled, // 生产打包开关 // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件 ,
      logger: false // 是否在控制台显示请求日志
    }),

    // GIZP
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),

    // 传统浏览器兼容性
    legacy({
      targets: ['> 1%, last 1 version, ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },

  build: {
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    minify: 'terser',
    sourcemap: false,
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      }
    },
    chunkSizeWarningLimit: 1500 // chunk 大小警告的限制（以 kbs 为单位）
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/css/globalCss.scss" as *;`,
        silenceDeprecations: ['legacy-js-api'],
        api: 'modern-compiler' // or 'modern'
      }
    }
  },

  base: './', // 打包路径
  server: {
    // port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    /* proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^/api/, '')
      }
    } */
  }
})
