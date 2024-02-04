const express = require("express");
const cors = require("cors");

const routerApi = require("./routes");
const config = require("./config");

const app = express();

// This middleware is used to handle JSON
app.use(express.json());

const whiteList = [`http://${config.host}:${config.port}`];

const origins = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Access denied"));
    }
  },
};

app.use(cors(origins));
routerApi(app);

app.listen(config.port, () =>
  console.log(
    `App is running on port ${config.host}:${config.port}/${config.version}`,
  ),
);
