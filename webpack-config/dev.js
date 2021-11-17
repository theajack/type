const path = require('path');

module.exports = {
    entry: path.resolve('./', 'src/game.js'),
    output: {
        path: path.resolve('./', 'docs'),
        filename: 'game.min.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.resolve('./', 'docs'),
        historyApiFallback: true,
        inline: true,
        host: 'localhost'// '0.0.0.0' //
    },
    module: {
        rules: [{
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
            }]
        }, {
            test: /(.js)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                configFile: './.eslintrc.js'
            }
        }]
    }
};