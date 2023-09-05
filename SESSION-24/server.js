import express from "express";
const app = express();

app.listen(3001, () => {
    console.log("The server is listening... 🐒")
});

import planetRoute from './routes/planetRoute.js';
import satelliteRoute from "./routes/satelliteRoute.js"

app.use('/satellite/', satelliteRoute);
// http://localhost:3001/planets/
app.use('/planets/', planetRoute);


