const router = require("express").Router();
const config = require("../config");

router.get("/", (req, res) => {
  console.log(`You fetched ${req}`);
  res.send(`
    <h1>Render test</h1>
    <div>
      <p>This service is running under ${config.port}</p>
    </div>
  `);
});

module.exports = router;
