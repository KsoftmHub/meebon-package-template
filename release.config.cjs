/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ["master",
    {
      name: "beta",
      prerelease: true
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { "changelogFile": "CHANGELOG.md" }],
    ["@semantic-release/git", { "assets": ["CHANGELOG.md"] }],
    "@semantic-release/github"
  ]
};