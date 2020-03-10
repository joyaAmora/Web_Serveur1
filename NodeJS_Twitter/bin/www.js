const fs = require("fs");
const Url = require("url");
const https = require("https");
const http = require("http");
const app = require("../app");
const env = require(`../environment/${process.env.NODE_ENV}`);

const httpServer = http
  .createServer((req, res) => {
    res.writeHead(301, {
      Location: `https://${req.headers.host.split(":")[0] + ":" + env.portHttps}${req.url}`
    });
    res.end();
  })
  .listen(env.portHttp);

const httpsServer = https
  .createServer(
    {
      key: fs.readFileSync(env.key),
      cert: fs.readFileSync(env.cert)
    },
    app
  )
  .listen(env.portHttps);
