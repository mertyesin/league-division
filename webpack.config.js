const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ENTRY_PATH = path.join(__dirname, "ld-web/src/components/index.js"),
    OUTPUT_PATH = path.join(__dirname, "dist");

module.exports = {
    entry: [ENTRY_PATH],

    output: {
        path: OUTPUT_PATH,
        filename: "bundle.js"
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [

        new CopyWebpackPlugin([
            {from: `${__dirname}/index.html`}
        ])
    ],

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
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
