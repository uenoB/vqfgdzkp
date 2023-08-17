module.exports = {
  branches: ['latest'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {
        publishCmd:
          "(rm package.json && jq 'del(.scripts)' > package.json) < package.json"
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          "sed -i~ 's/\\(VERSION *= *\\)'\\''.*'\\''/\\1'\\''${nextRelease.version}'\\''/' *.js"
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', '*.js']
      }
    ],
    '@semantic-release/github'
  ]
}
