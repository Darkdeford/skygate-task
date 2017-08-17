module.exports = {
    entry: "./src/app.js",
    output: {filename: "app.js"},
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015']}
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devtool: "#inline-source-map"
};