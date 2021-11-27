const fastify = require('fastify')({
    logger: true
});


fastify.get('/test', function (request, reply) {
    reply.header("Access-Control-Allow-Origin", "*");
    reply.send({ message: 'awesome!!' })
  })
  
  // Run the server!
  fastify.listen(3005, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })