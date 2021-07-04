const express = require('express')
const bodyParser = require("body-parser")
const axios = require('axios')
var cors = require('cors')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const {net} = require("./legal-brain");

const {database, trainBrain, getDataToRun, addData} = require("./firebase");

app.use(cors())

app.post('/getResult', (req, res) => {
    let dataToRun = getDataToRun(req.body);

    trainBrain().then((data) => {
        net.train(data);

        let result = net.run(dataToRun);
        req.body.result = result[0];
        req.body.output = Math.round(result[0]);

        addData(req.body);
        res.send(result[0].toString());
    });
})

app.get('/getHistory', (req, res) => {
    var historyRef = database.ref('history');

    historyRef.once('value', function (snap) {
        res.status(200).json({"legals": snap.val()});
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
