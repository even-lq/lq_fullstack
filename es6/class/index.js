class Foo {
  static bar() {
    this.baz()
  }
  // static baz() {

  // }
  baz() {
    console.log('world');
  }
}