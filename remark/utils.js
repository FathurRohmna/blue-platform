const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
loadLanguages()
require('./prism-diff-highlight')

const HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi

Prism.hooks.add('wrap', (env) => {
  const content = env.content.replace(HTML_TAG, '')
  if (content.startsWith('@apply')) {
    env.classes.push('atapply')
  }
})

module.exports.addDefaultImport = function addImport(tree, mod, name) {
  tree.children.unshift({
    type: 'import',
    value: `import _${name} from '${mod}'`,
  })
  return `_${name}`
}