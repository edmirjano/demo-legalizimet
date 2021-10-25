import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const express = require('express')
const bodyParser = require("body-parser")

var cors = require('cors')
const history = express()
const result = express()


history.use(bodyParser.urlencoded({extended: false}));
history.use(bodyParser.json());
result.use(bodyParser.urlencoded({extended: false}));
result.use(bodyParser.json());

const {net} = require("../../legal-brain");

const {database, trainBrain, getDataToRun, addData} = require("../../firebase");

history.use(cors())
result.use(cors())

result.post('/getResult', (req: any, res: any) => {
    let dataToRun = getDataToRun(req.body);

    trainBrain().then((data: any) => {
        net.train(data);

        let result = net.run(dataToRun);
        req.body.result = result[0];
        req.body.output = Math.round(result[0]);

        addData(req.body);
        res.send(result[0].toString());
    });
})

history.get('/getHistory', (req: any, res: any) => {
    var historyRef = database.ref('history');

    historyRef.once('value', function (snap: any) {
        res.status(200).json({"legals": snap.val()});
    })
})

export const historyFunc = functions.https.onRequest(history);
export const resultFunc = functions.https.onRequest(result);
