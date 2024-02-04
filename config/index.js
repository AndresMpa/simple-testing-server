require("dotenv").config();

const config = {
  version: process.env.VESRTION || "api",
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
};

module.exports = config;
