// server.js file h 
const express = require('express');
const WebSocket = require('ws');
const http = require('http');
// const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/delivery', (req, res) => res.render('delivery'));
app.get('/customer', (req, res) => res.render('customer'));

wss.on('connection', (ws) =>{
    console.log('New client connected');

    // ws.send(JSON.stringify({type: 'customer', ...customerLocation}));

    ws.on('message', (message) =>{
        try{
            const locationData = JSON.parse(message.toString());
            console.log('Location recived:', locationData);
    
            // broadcast message to all clients
            wss.clients.forEach(client => {
                if(client !== ws && client.readyState === WebSocket.OPEN){
                    client.send(JSON.stringify(locationData));
                }
            });
        } catch(error){
            console.error('Error parsing message:', error);
        }
    });
    
    ws.on('close', () => {
        console.log('client has disconnected');
    });

    ws.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`server started on port ${port}`)
});

// // // routes
// const routes = require('./routes/index');
// app.use('/', routes);


