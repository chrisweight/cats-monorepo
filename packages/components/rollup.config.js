import resolve from 'rollup-plugin-node-resolve'
import commonJS from 'rollup-plugin-commonjs'

export default {
	external: ['@cats/sdk'],
	input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'es',
		name: 'catsComponents'
  },
	plugins: [
		resolve(),
		commonJS({
			include: './node_modules/**'
		})
	]
}
