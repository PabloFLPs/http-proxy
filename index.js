const app = require("express")()
    
app.get("/", (request, response) => {
  //put a breakpoint here to see the waiting...
  console.log(request)
  response.send("received!")
})

const port = 3030
app.listen(port, () => console.log(`Proxy listening on port ${port}.`))