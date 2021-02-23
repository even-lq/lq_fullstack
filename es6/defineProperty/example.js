function Archiver() {
  let value = null;
  let archive = []

  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('get');
      return value
    },
    set: function (newValue) {
      console.log('set');
      // value = newValue
      archive.push({val: newValue})
    },
  })

  this.getArchive = function() {
    return archive
  }
}


let arc = new Archiver()
arc.num // get
arc.num = 11 // set
arc.num = 22 // set
arc.getArchive() // [{val: 11}, {val: 22}]
console.log(arc.getArchive());