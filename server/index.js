const server = require("./src/server");
const { database } = require("./src/db");

const PORT = 3001;


database
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);
    });
  })
  .catch((err) => console.log(err));