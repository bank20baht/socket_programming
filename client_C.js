const net = require('net');
const HOST = 'localhost';
const PORT = 6969;

// Create a new client
const client = new net.Socket();
let name = "Nattapong";
// Connect to the server
client.connect(PORT, HOST, () => {
  console.log(`Connected to ${HOST}:${PORT}`);
  // Send the client's name to the server
  client.write(name);
});

// Handle data from the server
client.on('data', (data) => {
  // Set the client's name
  console.log("Received: " + data);
});

// Handle client disconnection
client.on('end', () => {
  console.log('Disconnected from server');
});