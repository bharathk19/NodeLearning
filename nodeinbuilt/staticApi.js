const fs = require("fs");
const http = require("http");
const os = require("os");

const port = 6534;

const server = http.createServer((req, res) => {
  let path = "";
  if (process.cwd().indexOf("nodeinbuilt") > -1) {
    path = "../db.json";
  } else {
    path = "db.json";
  }
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(port);
