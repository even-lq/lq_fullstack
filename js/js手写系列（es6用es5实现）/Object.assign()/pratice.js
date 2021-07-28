function name(target) {
  var to = Object(target)
  for (var i = 1; i < arguments.length; i++) {
    var next = arguments[i]
    var keyArrays = Object.keys(Object(next));
    for (var i = 0; i < keyArrays.length; i++) {
      var nextKey = keyArrays[i];
      var desc = Object.getOwnPropertyDescriptor(next, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = next[nextKey];
      }
    }

  }
}