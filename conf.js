 //protractor.conf.js
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      './Features/test.feature'
    ],
  
    baseURL: 'http://localhost:8080/',
  
    cucumberOpts: {
      require: 'Features/Step_Definitions/StepDef.js',
      tags: false,
      format: 'pretty',
      profile: false,
      'no-source': true
    }
  };