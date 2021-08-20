module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: [
    "simple-import-sort",
    "@typescript-eslint",
    "jest",
    "testing-library",
  ],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effects.
          ["^\\u0000"],
          // Packages.
          ["^react", "^@?\\w"],
          // Relative and base url imports
          ["^(components|features|pages|types)/", "^\\."],
          // CSS modules
          ["^.*\\.module\\.css"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:jest/all", "plugin:testing-library/react"],
    },
  ],
};
