module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: './bundles',
        publicPath: '/bundles',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/, loader: "html"
            },
            {
                test: /\.css$/, loader: "style!css"
            }
        ]
    },
    devServer: {
        contentBase: './'
    }
};