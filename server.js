const express = require("express")
const path = require("path")

let app = express()

let server = app.listen(3000, ()=>{
    console.log("Listen port on 3000")
})


let io = require("socket.io")(server)

app.use(express.static(path.join(__dirname, "")))

let socketId = null
io.on("connection", (socket)=>{
   socketId =  socket.id
})


