const fs = require("fs")
const path = require("path")
const r = require("ramda")

const resolve = r.curryN(2, path.resolve)
const APP = fs.realpathSync(process.cwd())
const resolveApp = resolve(APP)

const SRC = resolveApp("src")
const LOADER = resolveApp("loader")

module.exports={
    SRC,
    DIST: resolveApp("dist"),
    TEST: resolveApp("test"),
    PUBLIC: resolveApp("public"),
    NODE_MODULES: resolveApp("node_modules"),
    appHtml: resolveApp("public/index.html"),
    appIndex: resolveApp("index"),
    resolveApp
}