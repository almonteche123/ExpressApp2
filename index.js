const app = require('./app');

const port = process.env.PORT || 3000; // test redeploy dummy commit

app.listen(port, () => {
  console.log(`Express app is running on port ${port}`);
});