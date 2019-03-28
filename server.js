const fastify = require('fastify');
const { IncomingMessage, Server, ServerResponse } = require('http');

const server = fastify();

server.get('/ping', (request, response) => {
  const { params, query } = request.params;
  console.log(params, query);
  response.code(200).send({ params, query });
});

server.listen(process.env.PORT || 8081, (error, address) => {
  if (error) throw error;
  console.log(`Server listening on port ${address}`);
});
