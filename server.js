const http = require("http"),
  url = require("url"),
  makeServer = function (request, response) {
    let path = url.parse(request.url).pathname;
    console.log(path);
    if (path === "/about") {
      response.write("Welcome to about us page");
    } else if (path === "/contact") {
      response.write("Welcome to contact us page");
    } else {
      response.write("Hello World!");
    }
    response.end();
  },
  server = http.createServer(makeServer);
server.listen(3000, () => {
  console.log("Node server created at port 3000");
});
