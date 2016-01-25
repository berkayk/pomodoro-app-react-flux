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
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};