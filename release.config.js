export default {
  release: { branches: ['latest'] },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    ['@semantic-release/git', { assets: ['package.json'] }],
    '@semantic-release/github'
  ]
}
