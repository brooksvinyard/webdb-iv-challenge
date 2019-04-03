const server = require('./server.js');


const port = 5555;
server.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`);
});
