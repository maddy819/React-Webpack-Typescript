import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";

module.exports = {
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-Typescript-Webpack',
            template: "./index.html", // to import index.html file inside index.tsx
            favicon: "./public/react.png"
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        port: 3030, // you can change the port
        open: true
    },
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
        cacheDirectory: path.resolve(__dirname, '.temp_cache'),
        compression: 'gzip',
        hashAlgorithm: 'md4',
        buildDependencies: {
            config: [__filename],
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:  {'loader': 'ts-loader'},
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization : {
        usedExports: true,
        minimizer: [ new CssMinimizerPlugin(), new HtmlMinimizerPlugin() ],
        minimize: true
    }
};