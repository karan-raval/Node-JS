const http = require("http");
const path = require("path");
const fs = require("fs");
// let home = path.join(__dirname,"index.html")
// console.log(home)
let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let a = fs.readFileSync("index.html",'utf-8')
    res.end(a);
  } else if (req.url == "/about") {
    res.end("about Page");
  } else if (req.url == "/contact") {
    res.end("contact form Page");
  } else {
    res.end("Page Not Found !!!!!");
  }
})

server.listen(3000, () => {
  console.log("server running at 3000");
})
