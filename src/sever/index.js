const app = require("express")();
const http = require("http").createServer(app);

// socket server library
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

io.on("connection", socket => {
  console.log("a user connected");
  socket.on("chat message", msg => {
    io.emit("chat message", msg);
  });
});

http.listen(3001, () => {
  console.log("listinening on port 3001");
});
