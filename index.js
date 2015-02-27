var storageName = 'localStorage';
var testKey = 'supports-localStorage_test';

module.exports = function() {
  var storage = window[storageName];

  if(storage) {
    try {
      storage.setItem(testKey, true);
      storage.removeItem(testKey);
      return true;
    } catch(e) {
      return false;
    }
  }

  return false;
};