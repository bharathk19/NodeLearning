let fs = require("fs");

fs.writeFile("Main.txt", "Hello World", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
