module.exports = {
  branches: ['latest'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/exec',
      {
        prepareCmd: String.raw`sed -i~ 's/\(VERSION *= *\)'\''.*'\''/\1'\''${nextRelease.version}'\''/' *.js`
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
