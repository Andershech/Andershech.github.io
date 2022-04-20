var socket = io("socket.donationalerts.ru:3001");
socket.emit('add-user', {token: "", type: "minor"});
socket.on('donation', function(msg){})