import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const config = {
    input: 'src/index.js',
    output: {
        file: 'bundle.js',
        format: 'es',
        name: 'validateSchema',
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        terser(),
    ],
};

export default config;
