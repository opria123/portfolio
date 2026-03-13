import react from '@vitejs/plugin-react'
import path from 'path'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    plugins:
        [
            react()
        ],
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        },
    },
    optimizeDeps: {
        include: [
            '@emotion/styled',
            '@material-tailwind/react',
            '@mui/icons-material',
            '@mui/material'
        ],
    },
    root: 'src/',
    base: './',
    server:
    {
        host: true,
        open: false // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    publicDir: '../public'
}