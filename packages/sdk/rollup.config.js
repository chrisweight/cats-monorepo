
import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
		name: 'CatsSDK'
  },
  plugins: [ resolve(), common() ]
}
