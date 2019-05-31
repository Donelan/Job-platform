module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://192.168.6.163:8080/',
                // 如果要代理 websockets
                ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false
            }
        }
    },
}