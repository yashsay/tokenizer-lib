export default {
  source: [
    'src/tokens/primitive.json',
    'src/tokens/semantic.json',
    'src/tokens/molecules.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'primitives.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: ':root' },
          filter: (token) => token.path[0] === 'primitives'
        },
        {
          destination: 'semantic-light.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '.theme-light' },
          filter: (token) => token.path[0] === 'semantics' && token.path[1] === 'theme_light'
        },
        {
          destination: 'semantic-dark.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '.theme-dark' },
          filter: (token) => token.path[0] === 'semantics' && token.path[1] === 'theme_dark'
        },
        {
          destination: 'molecules-light.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '.theme-light' },
          filter: (token) => token.path[0] === 'molecules' && token.path[1] === 'theme_light'
        },
        {
          destination: 'molecules-dark.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '.theme-dark' },
          filter: (token) => token.path[0] === 'molecules' && token.path[1] === 'theme_dark'
        },
        {
          destination: 'shorthand-light.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '.theme-light' },
          filter: (token) => token.path[0] === 'shorthand' && token.path[1] === 'theme_light'
        },
        {
          destination: 'shorthand-dark.css',
          format: 'css/variables',
          options: { outputReferences: true, selector: '.theme-dark' },
          filter: (token) => token.path[0] === 'shorthand' && token.path[1] === 'theme_dark'
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'primitives.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'primitives'
        },
        {
          destination: 'semantic-light.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'semantics' && token.path[1] === 'theme_light'
        },
        {
          destination: 'semantic-dark.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'semantics' && token.path[1] === 'theme_dark'
        },
        {
          destination: 'molecules-light.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'molecules' && token.path[1] === 'theme_light'
        },
        {
          destination: 'molecules-dark.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'molecules' && token.path[1] === 'theme_dark'
        },
        {
          destination: 'shorthand-light.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'shorthand' && token.path[1] === 'theme_light'
        },
        {
          destination: 'shorthand-dark.js',
          format: 'javascript/es6',
          filter: (token) => token.path[0] === 'shorthand' && token.path[1] === 'theme_dark'
        }
      ]
    }
  }
};


