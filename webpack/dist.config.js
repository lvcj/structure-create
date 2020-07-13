const paths = require("./paths")
const common = require("./common")
module.exports = {
    mode: "production",
    entry: [...common.entry],
    output: {
        path: paths.DIST,
        filename: "static/js/[name].[hash].js",
        chunkFilename: "static/js/[name].[chunkhash].js",
        ...common.output
    },
    module:{...common.module},
    resolve:{...common.resolve},
}