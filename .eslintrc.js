module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    // no return types needed if it can be inferred. useful for react components and sagas so it's less to worry about
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
