const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(`You fetched ${req}`);
  res.send(`
    <h1>Render test</h1>
    <div>
      <p>This service is running under ${process.env.PORT}</p>
    </div>
  `);
});

module.exports = router;