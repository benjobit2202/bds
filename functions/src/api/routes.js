let userRouter = require('./user/routes.js');
let contactRouter = require('./contact/routes.js');

module.exports = (app) => {
  app.get("/.netlify/functions/api", (req, res) => {res.json({ message: "Welcome to ben's application!" })});
  app.use("/.netlify/functions/api", userRouter);
  app.use("/.netlify/functions/api", contactRouter);
}

