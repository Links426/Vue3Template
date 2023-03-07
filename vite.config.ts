import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import path from 'path'
const resolve = (dir) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    base: './', //打包路径
    plugins: [
        vue(),
        Unocss({
            presets: [presetUno(), presetAttributify()],
            shortcuts: [
                ['flex-center', 'flex items-center justify-center'],
                ['rounded', 'rounded-50%'],
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve('src'),
        }, // 导入时想要省略的扩展名列表
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
})
