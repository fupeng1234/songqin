module.exports = {
  root: true,
  requireConfigFile: false,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren':0,   //关闭在函数定义的左括号前强制使用一致的间距
    'eol-last':0,         //关闭在文件末尾至少强制执行一个换行符
    'prefer-const':0,     //关闭对声明后从未重新赋值的变量，要常量声明
    'spaced-comment':0,   //关闭在注释中的//或/*后面强制使用一致的间距
    'no-multi-spaces':0   //关闭不允许多个空格的检查
  }
}
