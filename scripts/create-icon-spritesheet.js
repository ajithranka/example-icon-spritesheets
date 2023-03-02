const fs = require('fs')

let iconSymbols = ''
fs.readdirSync('./src/assets/icons').forEach((fileName) => {
  const iconSlug = fileName
    .replace(/\.\w+$/, '') // Strip file extension
    .replace(/\ /, '-') // Replaces spaces with hyphens
    .toLowerCase()

  const iconContent = fs
    .readFileSync(`./src/assets/icons/${fileName}`, 'utf8')
    .replace(
      /<svg.*(viewBox=\"[^\"]*\").*>([\s\S]*)<\/svg>/,
      `<symbol id="icon-${iconSlug}" $1>$2</symbol>`
    )

  iconSymbols += iconContent
})

function toSymbol(iconContent, iconSlug) {
  const $ = cheerio.load(iconContent)
  const svgElement = $('svg').removeAttr('xmlns').removeAttr('xmlns:link')
  return svgElement
}

const component = `
<template>
  <svg width="0" height="0" style="display: none">
  ${iconSymbols}
  </svg>
</template>
`.trim()

fs.writeFileSync('./src/components/AppIconSpritesheet.vue', component)
