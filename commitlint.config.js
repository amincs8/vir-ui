export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["repo", "utils", "vue", "react", "styles"]],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};