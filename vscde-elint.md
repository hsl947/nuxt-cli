```javascript
// vscode-eslint-config
// 将设置放入此文件中以覆盖默认设置
{
  "editor.fontSize": 20,
  "editor.mouseWheelZoom": true,
  "files.autoSave": "off",
  "editor.formatOnType": false,
  "editor.formatOnSave": false,
  "workbench.activityBar.visible": true,
  "workbench.colorTheme": "Visual Studio Light",
  "vsicons.dontShowNewVersionMessage": true,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.iconTheme": "vscode-icons",
  "breadcrumbs.enabled": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.tabSize": 2,
  "vetur.format.defaultFormatterOptions": {
      "prettier": {
          "semi": false, //去掉末尾分号
          "singleQuote": true //将所有双引号改为单引号
      }
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //在方括号之间插入空格
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  //配置下vscode支持vue语言
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      "html",
      {
          "language": "vue",
          "autoFix": true
      }
  ],
  "eslint.autoFixOnSave": true
}
```

```javascript
// nuxt-eslint-config
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "nuxt/no-cjs-in-config": "off",

    "generator-star-spacing": "off",
    "no-mixed-operators": 0,
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-console": 0,
    "no-tabs": 0,
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "no-delete-var": 2,
    "prefer-const": [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ]
  }
};
```
