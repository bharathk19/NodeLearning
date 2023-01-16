const http = require("http");

const port = 6500;

let server = http.createServer((req, res) => {
  res.write(
    "<h1> This is a NodeJs development server to show up Sever as started!!  </h1>"
  );
  res.end();
});

server.listen(port);
