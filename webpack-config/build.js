const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve('./', 'src/game.js'),
    output: {
        path: path.resolve('./', 'docs'),
        filename: 'game.min.js',
        library: 'game',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this'
    },
    module: {
        rules: [{
            test: /(.js)$/,
            use: [{
                loader: 'babel-loader',
            }]
        }]
    }
};