const fs = require("fs");

const requestHandler = (req, res) => {
  //console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      "<html><body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body></html>"
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[0];
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><Text><h1>hi this is first response of NODE.JS</h1></Text></body></html>");
  res.end();
  //process.exit();
};
//export default requestHandler;
module.exports = {
  handler: requestHandler,
  someTest: "some text areas"
};
