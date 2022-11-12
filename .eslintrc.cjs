module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['@vue/prettier', 'plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 13,
    //parser: 'babel-eslint',
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn'
  }
}
