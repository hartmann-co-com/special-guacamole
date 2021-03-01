const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/.netlify/functions/api',
        createProxyMiddleware('/.netlify/functions/api', {
            target: 'http://localhost:9000',
            pathRewrite: {
                '^/\\.netlify/functions': ''
            }
        })
    );

    app.use(
        '/.netlify/functions/api-ql',
        createProxyMiddleware('/.netlify/functions/api-ql', {
            target: 'http://localhost:9000',
            pathRewrite: {
                '^/\\.netlify/functions': ''
            }
        })
    )
};
