const fastify = require('fastify');
const { IncomingMessage, Server, ServerResponse } = require('http');

const server = fastify();

server.get('/ping', (request, response) => {
  const query = request.raw.originalUrl;
  console.log(query);
  response.code(200).send({ query });
});

server.listen(process.env.PORT || 8081, (error, address) => {
  if (error) throw error;
  console.log(`Server listening on port ${address}`);
});
