
module.exports = {
    staticFileGlobs: [
      '/template.html',
      '/manifest.json',
      '/src/routes/',
      '/assets/'

    ],
    navigateFallback: '/template.html',
    navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
  }