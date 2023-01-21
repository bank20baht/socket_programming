const net = require('net');
const HOST = 'localhost';
const PORT = 6969;
let clinets = [];
let i = 0;

// Create a new server
const server = net.createServer((socket) => {
  console.log('Client connected');
    clinets.push(socket);
  // Add the client's name to a list of names
  let name;
  // Handle data from client
  socket.on('data', (data) => {
    // If the client hasn't sent a name yet, set it as their name
    
    if (!name) {
      name = data;
      console.log(`Received name: ${name}`);
        for(i = 0; i < clinets.length; i++){
        if(socket != clinets[i]){
            clinets[i].write(name + " is join\n");
        }
    }
    } 
  });

  socket.on('close', function (data) {
        console.log("CLOSED: " + name);
        for(i = 0; i < clinets.length; i++){
            if(socket != clinets[i]){
                clinets[i].write(name + " is out.\n");
            }
        }
    });
});


// Start the server
server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
