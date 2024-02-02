const cors = require("cors");
const express = require("express");
const routerApi = require("./routes");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;
const app = express();

// This middleware is used to handle JSON
app.use(express.json());

const whiteList = [`http://${HOST}:${PORT}`];

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

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
