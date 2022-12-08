module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true // vue3写法的校验，会导致一些vue一些预设的方法提示报错，不需要重新import, 例如'defineProps' is not defined
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['../tsconfig.json'],
    tsconfigRootDir: 'src',
    extraFileExtensions: ['.vue']
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 1,
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-empty-function': 'off', // 允许空函数
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 允许 any
    '@typescript-eslint/no-non-null-assertion': 'off', //允许 null
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prefer-const': [
      // 不允许let定义常量
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'space-before-function-paren': 'off', // 去掉函数前面的空格
    'vue/multi-word-component-names': 'off',
    'vue/custom-event-name-casing': 'off', // 自定义事件名称驼峰关闭
    'vue/name-property-casing': 'off', // 组件名称驼峰关闭
    'vue/html-self-closing': 'off' // vue/vue3-recommended 和 prettierrc冲突
  }
}