import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

app.use('/static', express.static('views'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
});

console.log(path.resolve());

app.listen(port, (error) => {
    if (error) {
        return console.log(`error starting the server: ${error}`);
    }
    console.log(`server is running port: ${port}`);
});
