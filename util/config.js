const fs = require('fs')

const parseConf = fpath => {
  "use strict"
  const content = fs.readFileSync(fpath, 'utf8')
  return JSON.parse(content)
}

module.exports = exports = parseConf