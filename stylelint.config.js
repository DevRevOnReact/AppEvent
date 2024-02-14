module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "import-notation": null,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "selector-pseudo-class-no-unknown": null,
    "at-rule-no-unknown": [
      null,
      {
        ignoreAtRules: ["extends"],
      },
    ],
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s", "px", "vw", "vh", "%", "fr", "deg"],
    "media-feature-range-notation": "prefix",
  },
};
