module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: './bundles',
        publicPath: '/bundles/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.html$/, loader: "html"
            },
            {
                test: /\.css$/, loader: "style!css"
            }
        ]
    },
    jshint: {
        emitErrors: false,
        failOnHint: false
    },
    devServer: {
        contentBase: './'
    }
};