const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const HTML_TEMPLATE_PATH = path.resolve(__dirname, 'src', 'index.html');
const ENVIRONMENT = 'development';

module.exports = {
    mode: ENVIRONMENT,
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    entry: {
        app: ['babel-polyfill', `${SRC_DIR}/index.js`],
    },
    output: {
        path: DIST_DIR,
        filename: 'js/bundle.js',
    },
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            env: ENVIRONMENT,
            template: HTML_TEMPLATE_PATH,
        }),
    ],
};
