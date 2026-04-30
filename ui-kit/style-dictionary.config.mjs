import StyleDictionary from 'style-dictionary'
import { formats, transformGroups } from 'style-dictionary/enums'

const COMPONENTS = [
  { componentName: 'Button', tokenName: 'button' },
  { componentName: 'Checkbox', tokenName: 'checkbox' },
  { componentName: 'Radiobutton', tokenName: 'radiobutton' },
  { componentName: 'Switch', tokenName: 'switch' },
  { componentName: 'Input', tokenName: 'input' },
  { componentName: 'TextArea', tokenName: 'textArea' },
  { componentName: 'Dropdown', tokenName: 'dropdown' },
  { componentName: 'Counter', tokenName: 'counter' },
  { componentName: 'Avatar', tokenName: 'avatar' },
  { componentName: 'Card', tokenName: 'card' },
  { componentName: 'Tabs', tokenName: 'tabs' },
  { componentName: 'Toast', tokenName: 'toast' },
  { componentName: 'Tooltip', tokenName: 'tooltip' },
  { componentName: 'TooltipPopover', tokenName: 'tooltipPopover' },
  { componentName: 'Modal', tokenName: 'modal' },
  { componentName: 'ModalCongrat', tokenName: 'modalCongrat' },
  { componentName: 'ProgressBar', tokenName: 'progressBar' },
  { componentName: 'Separator', tokenName: 'separator' },
  { componentName: 'Skeleton', tokenName: 'skeleton' },
  { componentName: 'Sticker', tokenName: 'sticker' },
  { componentName: 'Label', tokenName: 'label' },
  { componentName: 'InfoBlock', tokenName: 'infoBlock' },
  { componentName: 'CloseButton', tokenName: 'closeButton' },
  { componentName: 'LikeButton', tokenName: 'likeButton' },
  { componentName: 'LinkButton', tokenName: 'linkButton' },
  { componentName: 'HelpButton', tokenName: 'helpButton' },
  { componentName: 'TapBar', tokenName: 'tapBar' },
  { componentName: 'Header', tokenName: 'header' },
  { componentName: 'Footer', tokenName: 'footer' },
  { componentName: 'Sidebar', tokenName: 'sidebar' },
  { componentName: 'PageHeader', tokenName: 'pageHeader' },
  { componentName: 'ErrorPage', tokenName: 'errorPage' },
  { componentName: 'ChosenMaterial', tokenName: 'chosenMaterial' },
  { componentName: 'TextBlock', tokenName: 'textBlock' },
  { componentName: 'Message', tokenName: 'message' },
  { componentName: 'Promocode', tokenName: 'promocode' },
]

const TOKEN_CATEGORIES = {
  COMPONENT: 'component',
  PRIMITIVES: 'primitives',
  SHADOW: 'shadow',
}

StyleDictionary.registerFilter({
  name: 'fontTokens',
  filter:
    token =>
      token.path[0] === 'font'
      && token.filePath.includes(TOKEN_CATEGORIES.COMPONENT),
})

function buildComponentOutputs(entries) {
  return entries.map((entry) => {
    return {
      destination:
        `components/${entry.componentName}/${entry.componentName}-vars.scss`,
      format: formats.scssVariables,
      options: {
        outputReferences: true,
      },
      filter: token => token.path[0] === entry.tokenName,
    }
  })
}

function toKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function resolveAliasTree(obj, pathSegments = []) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'object' && !('value' in value)) {
      return acc + resolveAliasTree(value, [...pathSegments, toKebab(key)])
    }
    const varName = `$${[...pathSegments, toKebab(key)].join('-')}`
    const varValue
      = ['opacity', 'weight'].some(k => pathSegments.includes(k))
        ? value.value.replace(/px/g, '')
        : `$${value.original.value.replace(/[{}]/g, '').split(/[.\s_]+/).map(seg => toKebab(seg)).join('-')}`
    return `${acc}${varName}: ${varValue};\n`
  }, '')
}

StyleDictionary.registerFormat({
  name: 'resolvedAliases',
  format({ dictionary }) {
    return resolveAliasTree(dictionary.tokens)
  },
})


export default {
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: transformGroups.scss,
      buildPath: 'src/',
      files: [
        {
          destination: 'styles/scss/primitives-variables.scss',
          format: formats.scssVariables,
          filter:
            token => token.filePath.includes(TOKEN_CATEGORIES.PRIMITIVES),
        },
        {
          destination: 'styles/scss/shadow-variables.scss',
          format: formats.scssVariables,
          options: {
            outputReferences: true,
          },
          filter:
            token => token.path[0] === 'shadow',
        },
        {
          destination: 'styles/scss/font-variables.scss',
          format: formats.scssVariables,
          options: {
            outputReferences: true,
          },
          filter: 'fontTokens',
        },
        ...buildComponentOutputs(COMPONENTS),
      ],
    },
  },
}
