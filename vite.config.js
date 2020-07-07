import prefresh from '@prefresh/vite';

/** @type {import('vite').UserConfig} */
const config = {
  jsx: 'preact',
  plugins: [
    prefresh()
  ],
  optimizeDeps: {
    include: [
      '@prefresh/vite/runtime',
      '@prefresh/vite/utils'
    ],
  },
}

module.exports = config
