exports.config = {
    framework: 'jasmine',
    baseUrl: '',
    specs: [
        './specs/*.js'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    maxInstances: 1,
    onPrepare: async() => {
        /* eslint-disable-next-line global-require */
        require("@babel/register");
        await browser.waitForAngularEnabled(false);
      }
  }