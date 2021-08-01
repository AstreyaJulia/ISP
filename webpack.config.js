const path = require('path')
module.exports = {
    entry: './src/entry.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/assets/js/'),
        filename: 'app.js'
    },
    plugins: [
    ],
    mode: 'production'
}
