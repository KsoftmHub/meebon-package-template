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
};