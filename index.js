const fastify = require('fastify');
const { IncomingMessage, Server, ServerResponse } = require('http');

const server = fastify();

server.get('/ping', (request, response) => {
  const query = request.raw.originalUrl;
  console.log(query);
  response.code(200).send({ query });
});

const port = process.env.PORT || 8080;

server.listen(port, 0.0.0.0', (error, address) => {
  if (error) throw error;
  console.log(`Server listening on port ${address}`);
});
