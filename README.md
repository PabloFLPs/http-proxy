# HTTP Proxy
### How a HTTP Proxy works? Let's build one!

- Create a directory. In this case, mine is:
	`http_proxy`
- Install Express dependencies:
	`yarn add express`

- On the directory that you created, create an index.js file and write the code below:
    ```
    const app = require("express")()
    
    app.get("/", (request, response) => {
        //put a breakpoint here to see the waiting...
        console.log(request)
        response.send("received!")
    })

    const port = 3030
    app.listen(port, () => console.log(`Proxy listening on port ${port}.`))
    ```
**Now you have your HTTP Proxy setting.**

**Obs.:**
- "When you run either "yarn" or "yarn add" <package>, Yarn will generate a yarn.lock file within the root directory of your package. You don’t need to read or understand this file - just check it into source control. When other people start using Yarn instead of npm, the yarn.lock file will ensure that they get precisely the same dependencies as you have".