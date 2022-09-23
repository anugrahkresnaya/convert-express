const http = require('http');
const { PORT = 8000 } = process.env; // Ambil port dari environment variable

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '/../public');

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, 'utf-8')
}

function onRequest(req, res) {
  if (req.url === "/") {
    res.writeHead(200);
    res.end(getHTML("index.html"))
  } else if (req.url === "/cars") {
    res.writeHead(200);
    res.end(getHTML("cars.html"))
  } else if (req.url.match("\.css$")) {
    const cssPath = path.join(__dirname, '/../public', req.url);
    const fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match("\.png$")) {
    const imagePath = path.join(__dirname, '/../public/', req.url);
    const fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match("\.jpg$")) {
    const imagePath = path.join(__dirname, '/../public/', req.url);
    const fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/jpg" });
    fileStream.pipe(res);
  } else if (req.url.match("\.js$")) {
    const scriptPath = path.join(__dirname, '/../public', req.url);
    const fileStream = fs.createReadStream(scriptPath);
    res.writeHead(200, { "Content-Type": "text/javascript" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 | No Page Found");
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, '0.0.0.0', () => {
  console.log("server berjalan, silahkan buka http://0.0.0.0:%d", PORT);
});
