let fs = require("fs");

let json = {
  India: { city: ["Bangalore", "India"], country: ["India", "Indonesia"] },
};

/* fs.writeFile("Main.txt", "Hello World", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}); */
fs.appendFile("Main.txt", "Hello World", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});

fs.appendFile("Main.json", JSON.stringify(json), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
