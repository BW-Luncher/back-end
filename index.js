const server = require('./server');

const PORT = process.env.PORT || 6600;
server.listen(PORT, () => {
	console.log(`\n Sever listening on ${PORT} \n`);
});
