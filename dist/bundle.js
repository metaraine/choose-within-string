'use strict';

/* Regex test cases:
  one-and'/two.
  one-and’/two!
  one-and/two?
  $100/200/300!
  This is a one/two/three punch!
  one / two
  10/100/1,000
*/
var choicesRegex = /([^\/\s$]*[^\/\s.,;?!])\/([^\/\s$]*[^\/\s.,;?!])(?:\/([^\/\s$]*[^\/\s.,;?!]))*/g;

module.exports = function (str, n, options) {
  options = options || {};
  if (options.replaceUnderscores === undefined) {
    options.replaceUnderscores = true;
  }
  return str.replace(choicesRegex, function (match) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var groups = rest.slice(0, rest.length - 2);
    if (n >= groups.length) {
      throw new Error('Cannot select option {n} from {groups.length} options ({groups}).');
    }
    return options.replaceUnderscores ? groups[n].replace(/_/g, ' ') : groups[n];
  });
};
//# sourceMappingURL=bundle.js.map
