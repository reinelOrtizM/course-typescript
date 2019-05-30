module.exports = {
    entry: "./app/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    watch: true,
    devtool: "soruce-map",
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", "json"]
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.hbs/, loader: "handlebars-loader"}
        ]
    },
    externals:{},
    mode: "production"
};