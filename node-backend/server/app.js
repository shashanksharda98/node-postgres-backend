require('dotenv').config();
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


const port = process.env.PORT || 8088;

app.use(
    cors({
        origin: "*",
    })
)

app.use(
    bodyParser.json({
        type: "*/*"
    })
)

app.use("/node/api", require('./routes/index'));
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert'),
};

const server = https.createServer(options, app);
server.listen(port, () => {
    console.log(`Server satrted at port: ${port}`);
})


