const http = require("http");

let server = http.createServer((req, res) => {
  if (res.url == "/") {
    res.end("hellow World");
  } else if (res.url == "/about") {
    res.end("about Page");
  } else if (res.url == "/contact") {
    res.end("contact form Page");
  } else {
    res.end("Page Not Found !!!!!");
  }
});

server.listen(3000, () => {
  console.log("server running at 3000");
});
