var storageName = 'localStorage'
var testKey = 'supports-localStorage_test'

var memo

module.exports = function() {
  // We can memoize this since supporting localstorage or not
  // is invariant once we are in a particular environment
  if(memo === undefined) {
    try {
      var storage = window[storageName]
      if(storage) {
        storage.setItem(testKey, true)
        storage.removeItem(testKey)
        memo = true
      } else {
        memo = false
      }
    } catch (e) {
      memo = false
    }
  }

  return memo
}
