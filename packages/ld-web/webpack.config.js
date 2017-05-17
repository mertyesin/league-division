const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ENTRY_PATH = path.join(__dirname, "/src/main.js"),
    OUTPUT_PATH = path.join(__dirname, "dist");

module.exports = {
    entry: [
        ENTRY_PATH
    ],
    output: {
        path: OUTPUT_PATH,
        filename: "bundle.js"
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new CleanWebpackPlugin([OUTPUT_PATH], {
            root: __dirname,
            verbose: true
        }),

        new CopyWebpackPlugin([
            {from: `${__dirname}/index.html`},
            {from: `${__dirname}/css`, to:"css"},
            {from: `${__dirname}/images`, to: "images"}
        ])
    ],

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: OUTPUT_PATH,
        inline: true,
        port: 8001
    }
};
