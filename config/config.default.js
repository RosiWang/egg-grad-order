/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560742503748_7312';

  // add your middleware config here
  config.middleware = [];
  //add
  // config.security = {
  //   csrf:{
  //     enable:false,
  //     ignoreJSON:true
  //   },
  //   domainWhiteList:['http://localhost:7002']
  // };
  config.cors = {
    origin:'*',
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  }


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
