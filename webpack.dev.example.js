const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader'
                    },
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: true,
        port: 8080,
    },
    plugins: [
        new DefinePlugin({
            'process.env.API_KEY': JSON.stringify('YOUR_API_KEY'),
            'process.env.API_URL': JSON.stringify('api.openweathermap.org/data/2.5/weather')
        }),
        new HtmlWebpackPlugin({
            template: './template.dev.html'
        })
    ]
})