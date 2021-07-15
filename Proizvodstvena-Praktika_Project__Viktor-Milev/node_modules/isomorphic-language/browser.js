/**
 * @file browser
 * @author Cuttle Cong
 * @date 2018/3/1
 * @description
 */

function getLanguage() {
  var userLang = navigator.language
                 || navigator.userLanguage
                 || navigator.browserLanguage
                 || navigator.systemLanguage;
  return userLang;
}

module.exports = getLanguage
