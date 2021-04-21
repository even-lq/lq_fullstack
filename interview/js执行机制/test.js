function name() {
  var a = "dfsf";
  for (var i = 1; i <= 5; i++) {
    setTimeout(
      function (j) {
        console.log(j, a);
      },
      i * 1000,
      i
    );
  }
}
name();
