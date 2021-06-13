exports.config = {
  profile: 'integration',
  specs: [
    './sample.spec.js'
  ],
//     capabilities: {
//     'browserName': 'chrome',
//     chromeOptions: {
//       binary: '/opt/google/chrome/google-chrome'
//     }
//   },
  useSeleniumJar:true,
  directConnect: true,
baseUrl: 'http://localhost:8080/index.html'
};