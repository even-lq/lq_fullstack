let deepCopy = function (obj) {
  let newObj = obj instanceof Array ? [] : {};

  if (typeof obj !== "object") {
    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }

  return newObj;
};

var object = {
  name: "my",
  getName: {
    b: "fds",
  },
};

let a = deepCopy(object);
object.name = "fds";

console.log(a);
console.log(object);
