import express from "express"
const app = express();
app.listen(3001, () => {
    console.log("Server is listening...!");
})

// Application-level middleware: using app.use() and app.METHOD()
/*
 1. middleware that runs every time the app receive a request
*/

app.use((req, res, next) => {
    console.log("Middle ware is called!");
    next();
})

/*
2. middleware that is mounted on a path and next() loading a series of middleware functions
  at a mount point

*/

app.use("/api/show/:uid", (req, res, next) => {
    console.log("Request Type: ", req.method);
    next();
})

// 3. middleware on a get route an its handle

app.use("/api/show/:uid", (req, res, next) => {
    console.log("Request Type: ", req.method);
    next()
}, (req, res, next) => {
    console.log("2nd function stack block!");
    next()
})
app.get('/api/show/:uid', (req, res, next) => {
    console.log(req.params.uid);
    console.log(req.originalUrl);
    console.log(req.method);
    res.send(`Reached to the route, id is  ${req.params.uid}`)
})

// 4. middleware attached with multiple get routes for a path

app.use("/api/show/:uid", (req, res, next) => {
    console.log("ID: ", req.params.uid);
    next();
})
app.get("/api/show/:uid", (req, resp, next) => {
    console.log("First Get route");
    next()
}, (req, res, next) => {
    res.send("Data was sent!")
});
// this get rout does not executed !
app.get("/api/show/:uid", (req, resp, next) => {
    req.send(`Uid was sent: ${req.params.id}`)
});

/*

5. next('route')! To skip the rest of the middleware functions from a router middleware stack
only for app.METHODS() NOT FOR app.use()

*/
app.use("/api/show/:uid", (req, res, next) => {
    console.log("ID: ", req.params.uid);
    next();
})

app.get("/api/show/:uid", (req, resp, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.uid === '0') next('route')
    else next()
}, (req, res, next) => {
    res.send("Data was sent!")
});
// this get rout does not executed !
app.get("/api/show/:uid", (req, resp, next) => {
    console.log(req.params.uid);
    resp.send(`Uid was sent: ${req.params.uid}`)
});


/* 
  6. Array of usability 
*/
const logOriginalUrl = (req, res, next) => {
    console.log("Original Url: ", req.originalUrl);
    next()
}
const logReqMethod = (req, res, next) => {
    console.log("Request Method: ", req.method);
    next();
}
const logUrl = (req, res, next) => {
    console.log("Requested Url: ", req.url);
    next()
}

const arrayOfReusability = [logOriginalUrl, logReqMethod, logUrl];

app.get("/api/user/:uid", arrayOfReusability, (req, res, next) => {
    console.log("END");
    res.send('Arrived!')
})