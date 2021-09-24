const app = require("express")()

app.get("/", (req, res) => {
  //put a breakpoint here to see the waiting...
  console.log(req)
  res.send("received!")
})

const port = 3030
app.listen(port, () => console.log(`Proxy listening on port ${port}.`))