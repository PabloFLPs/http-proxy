# Proxy Server Project

**Tutorial Reference:** [How an HTTP Proxy works and How to Build one?](https://www.youtube.com/watch?v=KOibBdrdyY0)

### Proxy Server
A Proxy server is a server that acts as a middle layer when requesting data from a 3rd party API. In building a proxy server, you will create a server that requests data from an external API and serves the user that information. A Proxy is an application that exists as an intermediate between client resources requesting and the server that provides these resources. Instead of connecting directly to the destiny server/application, the Proxy make the intermediate way and controls the complexity of the connection.
```
User <------> Proxy <-----> Internet Domain
```
So the Proxy receives requests from the internal network (LAN) and forward them to the internet and vice versa.

# HTTP Proxy
### What Does HTTP Proxy Mean?
- An HTTP Proxy serves two intermediary roles as an HTTP Client and an HTTP Server for security, management, and caching functionality. The HTTP Proxy routes HTTP Client requests from a Web browser to the Internet, while supporting the caching of Internet data.

**Proxy server advantages include:**
- Maintaining identity anonymity as a security precaution;
- Accelerating caching rates;
- Facilitating access to prohibited sites;
- Enforcing access policies on certain websites;
- Allowing a site to make external server requests;
- Avoiding security controls;
- Bypassing Internet filtering for access to prohibited content.

The HTTP proxy operates between the sending Web server and your receiving Web client. It processes the HTTP protocol line-by-line for any potentially harmful content before sending it to an internal Web client. It also acts as a buffer between your Web server and potentially harmful Web clients by enforcing HTTP RFC compliance and preventing potential buffer overflow attacks.

When you add an HTTP proxy policy to your Firebox configuration, you get access to two proxy actions that are included with the product: an HTTP server ruleset template and an HTTP client ruleset template. You can use these rulesets without changing them or you can use the rulesets as a base for a ruleset to meet the needs of your organization. This module shows you how to customize the rulesets in these two proxy actions.

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