function curry(fn, args) {
  let length = fn.length
  args = args || []

  return function() {
    let _args = args.slice(0), arg, i;
    for ( i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      _args.push(arg)
    }
    if (_args.length < length) {
      return curry.call(this, fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}

let test = curry(function(a, b, c, d) {
  console.log([a, b, c, d]);
})

test('a', 'b', 'c', 'd');
test('a')('b', 'c', 'd');
test('a')('b')('c')('d');