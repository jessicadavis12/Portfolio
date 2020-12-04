// Require express and initialize it
const express = require('express')
const app = express();
// Declare a port variable
const PORT = process.env.PORT || 3000
// Require socket.io and pass the server object to it
const io = require('socket.io')(
    app.listen(PORT, function(){
        console.log(`listening on port ${PORT}`)
    })
)
// Tell our app to use our client folder as static code
app.use(express.static('client'))
// Set up a home route and send the client folder



// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', socket => {
    console.log('a new user connected')
    socket.on('New User', nickname=>{
        console.log('new user is ', nickname)
        io.emit("New User", nickname)
    })
//server recives a new message and broadcast it to all browsers
io.on("New Message", message => {
    io.emit("new message", message)
})
})