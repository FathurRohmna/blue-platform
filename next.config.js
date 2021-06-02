const path = require('path')
const { createLoader } = require('simple-functional-loader')
const frontMatter = require('front-matter')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const querystring = require('querystring')
const minimatch = require('minimatch')

const fallbackLayouts = {
  'src/pages/docs/*': ['@/layouts/DocumentationLayout', 'DocumentationLayout']
}

const fallbackDefaultExports = {
  'src/pages/docs/*': ['@/layouts/ContentsLayout', 'ContentsLayout']
}

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    modern: true
  },
  webpack(config, options) {
    if (!options.dev) {
      options.defaultLoaders.babel.options.cache = false
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }, 
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          if (source.includes('/*START_META*/')) {
            const [meta] = source.match(/\/\*START_META\*\/(.*?)\/\*END_META\*\//s)
            return 'export default ' + meta
          }
          return (
            source.replace(/export const/gs, 'const') + `\nMDXContent.layoutProps = layoutProps\n`
          )
        }),
        {
          loader: '@mdx-js/loader',
        },
        createLoader(function (source) {
          let { meta: fields } = querystring.parse(this.resourceQuery.substr(1))
          let { attributes: meta, body } = frontMatter(source)

          if (fields) {
            for (let field in meta) {
              if (!fields.split(',').includes(field)) {
                delete meta[field]
              }
            }
          }

          let extra = []
          let resourcePath = path.relative(__dirname, this.resourcePath)

          if (!/^\s*export\s+(var|let|const)\s+Layout\s+=/m.test(source)) {
            for (let glob in fallbackLayouts) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackLayouts[glob][1]} as _Layout } from '${fallbackLayouts[glob][0]}'`,
                  'export const Layout = _Layout'
                )
                break
              }
            }
          }

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ''))) {
            for (let glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                  'export default _Default'
                )
                break
              }
            }
          }

          return [
            ...(typeof fileds === 'undefined' ? extra: []),
            typeof fields === 'undefined' ? body : '',
            typeof fields === 'undefined' 
              ? `export const meta = ${JSON.stringify(meta)}`
              : `export const meta = /*START_META*/${JSON.stringify(meta || {})}/*END_META*/`,
          ].join('\n\n')
        })
      ]
    })

    return config
  }
})