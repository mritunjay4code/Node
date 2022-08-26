const http = require("http");
const fs = require("fs");
const path = require("path");
const serverFile = (filePath) => {
  if (filePath != "/favicon.ico") {
    const fullPath = path.join(__dirname, "public", filePath);
    try {
      console.log("server file: " + fullPath);
      const buffer = fs.readFileSync(fullPath);
      return buffer;
    } catch (err) {
      return err;
    }
  }
};

function requireResponse(require, response) {
  const url = require.url;
  console.log("url is ", url);
  let fileName = "";
  if (url === "/") {
    fileName = "./index.html";
  } else {
    fileName = url;
  }
  const fileContent = serverFile(fileName);
  response.write(fileContent ? fileContent : "");

  // } else if (url == "/login") {
  //   response.write("login page");
  // } else if (url == "/reg") {
  //   response.write("regetation page");
  // }
  response.end();
}

const server = http.createServer(requireResponse);
server.listen(9999, (err) => {
  if (err) {
    console.log("server error: ", err);
  } else {
    console.log("server started", server.address().port);
  }
});
