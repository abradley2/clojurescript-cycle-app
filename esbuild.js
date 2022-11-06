const esbuild = require('esbuild')

const deps = [
    ['cycle-dom', 'esm', 'node_modules/@cycle/dom/lib/es6/index.js'],
    ['cycle-run', 'esm', 'node_modules/@cycle/run/lib/es6/index.js'],
    ['xstream', 'cjs', 'node_modules/xstream/dist/xstream.js'],
]

deps.forEach(function ([name, format, path]) {
    esbuild.build({
        entryPoints: [path],
        bundle: true,
        outfile: `resources/${name}.js`,
        sourcemap: true,
        minify: true,
        target: "es6",
        format
    })
})