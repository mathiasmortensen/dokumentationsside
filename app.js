import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.static('assets'));

import pagesRouter from './routers/pagesRouter.js';

app.use(pagesRouter);

const PORT = process.env.PORT || 8080;


app.listen(PORT, (error) => {
    if (error) {
        return console.log(`error starting the server: ${error}`);
    }
    console.log(`server is running port: ${PORT}`);
});
