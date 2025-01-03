const http = require("http");
const app = require("./app");

// Set the port to the environment variable PORT or 3000 if the environment variable is not set`
const port = process.env.PORT || "3000";

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
