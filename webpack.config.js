var webpack = require('webpack');

module.exports = {
    entry: './js/app.jsx',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, //tell webpack to use jsx-loader for all *.jsx files
            loader: 'jsx-loader?insertPragma=React.DOM&harmony' // The module to load. "babel" is short for "babel-loader"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
    ]
};