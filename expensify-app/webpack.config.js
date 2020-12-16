const path = require('path')

module.exports = {
    entry: ['babel-polyfill','./src/playground/destructuring.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env','react'],
                    plugins: ['transform-object-rest-spread','transform-class-properties']
                }
            }
        },{
            test: /\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
        historyApiFallback: true
    },
    devtool: 'source-map'
}