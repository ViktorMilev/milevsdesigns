/**
 * @file node
 * @author Cuttle Cong
 * @date 2018/3/1
 * @description
 */
var locale = require('os-locale')
module.exports = locale.sync.bind(locale);
