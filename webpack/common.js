const paths = require("./paths")

module.exports = {
    entry: [require.resolve("./polyfills"), paths.appIndex],
    output: {
        library: "skin-peeler",
        libraryTarget: "umd",
        jsonpFunction: "webpackJsonp_skin-peeler",
        publicPath: "/",
        
    },
    resolve: {
        alias: {
          "~": paths.SRC,
        },
        modules: [paths.SRC, "node_modules"],
        extensions: [
          ".h5.js",
          ".h5.ts",
          ".h5.mjs",
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".mjs",
        ],
    },
    module: {
        rules: [
          {
            test: /\.[jt]sx?$/,
            use: [
              {
                loader: "cache-loader",
              },
              {
                loader: "babel-loader",
              },
            ],
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: require.resolve("css-loader"),
                    options: {
                    importLoaders: 1,
                    },
                },
            ],
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                    importLoaders: 1,
                    },
                },
                "postcss-loader",
            ],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
          {
            test: /\.woff2?\??.*$/,
            use: {
              loader: "url-loader",
              options: {
                name: "[name].[ext]",
                limit: 5000,
                mimetype: "application/font-woff",
              },
            },
          },
          {
            test: /\.(ttf|eot|svg)\??.*$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
          },
        ],
    },
}


