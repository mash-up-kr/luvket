module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'declaration-empty-line-before': null,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'function-name-case': ['lower', {
      ignoreFunctions: [/^\${/],
    }],
  },
};
