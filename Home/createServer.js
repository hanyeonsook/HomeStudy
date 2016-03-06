var net = require('net');

var server = net.createServer(function(socket){
	console.log('Connected to Server');
	socket.on('end', function(){
		console.log('connection is closed');
	});
	
	socket.write('Hello\r\n');
});


server.listen(8124, function(){
	console.log('Server is connected to %dport.', server.address().port);
});