import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
    react()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
