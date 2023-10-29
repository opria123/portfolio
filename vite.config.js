import react from '@vitejs/plugin-react'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    plugins:
        [
            react()
        ],
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