var firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyBWTJ0LPezKf7c5I81ATdLVi1h8ZDaJm6A",
  authDomain: "legalizimet-5579a.firebaseapp.com",
  databaseURL: "https://legalizimet-5579a-default-rtdb.firebaseio.com",
  projectId: "legalizimet-5579a",
  storageBucket: "legalizimet-5579a.appspot.com",
  messagingSenderId: "930998404134",
  appId: "1:930998404134:web:5011c2e7bb462239a352e7"
};

var app = firebase.initializeApp(firebaseConfig)


let database = firebase.database()

db = firebase.firestore(app);


let trainBrain = async function () {

  let trainingData = [];
  let data;
  var historyRef = database.ref('history');

  await historyRef.once('value', function (snap) {
      data = {
          "legals": snap.val()
      };
  });

  let legals = data ?. legals;
  for (var key in legals) {
      let legal = legals[key];
      if (legals.hasOwnProperty(key)) {
          trainingData.push({
              "input": [
                  legal.cenonKritereteMoscenimit? 1 : 0,
                  legal.eshteObjektNeShkeljeTeLejesSeNdertimit? 1 : 0,
                  legal.eshtePosedues? 1 : 0,
                  legal.zoneInformaleApoUrbane == "Informale" ? 1 : 0,
                  legal.eshteVijeBregdetare? 1 : 0,
                  legal.kurifiRrugor,
                  legal.rrugeKombetareApoJoKombetare == "Kombetare" ? 1 : 0,
                  legal.plotesonCilesineNdertimore? 1 : 0,
                  legal.eshteTrashegimiKulturore? 1 : 0,
                  legal.shkelBrezinMbrojtesTeGazsjellesit? 1 : 0,
                  legal.cenonIntegritetinEParkutArkeologjik? 1 : 0,
                  legal.eshteZoneESigurise? 1 : 0,
                  legal.cenonPamjenEJashtmeTeMonumentitTeKultures? 1 : 0,
                  legal.cenonTerritorinENdertesavePublike? 1 : 0,
                  legal.shkelTruallininERrugesEkzistuese? 1 : 0,
                  legal.cenonVijenBlu? 1 : 0,
                  legal.eshteNdertuarMinimalishtnjeKat? 1 : 0,
                  legal.gjendetNerrethanateMoslekalizimitSipasligjit20_2020? 1 : 0,
                  legal.eshteObjektApoShtese == "Objekt" ? 1 : 0
              ],
              "output": [legal.output]
          })
      }
  }

  return trainingData;
};


let getDataToRun = function getDataToRun(userData){
  let dataToRun = [
   userData.cenonKritereteMoscenimit? 1 : 0,
   userData.eshteObjektNeShkeljeTeLejesSeNdertimit? 1 : 0,
   userData.eshtePosedues? 1 : 0,
   userData.zoneInformaleApoUrbane == "Informale" ? 1 : 0,
   userData.eshteVijeBregdetare? 1 : 0,
   userData.kurifiRrugor,
   userData.rrugeKombetareApoJoKombetare == "Kombetare" ? 1 : 0,
   userData.plotesonCilesineNdertimore? 1 : 0,
   userData.eshteTrashegimiKulturore? 1 : 0,
   userData.shkelBrezinMbrojtesTeGazsjellesit? 1 : 0,
   userData.cenonIntegritetinEParkutArkeologjik? 1 : 0,
   userData.eshteZoneESigurise? 1 : 0,
   userData.cenonPamjenEJashtmeTeMonumentitTeKultures? 1 : 0,
   userData.cenonTerritorinENdertesavePublike? 1 : 0,
   userData.shkelTruallininERrugesEkzistuese? 1 : 0,
   userData.cenonVijenBlu? 1 : 0,
   userData.eshteNdertuarMinimalishtnjeKat? 1 : 0,
   userData.gjendetNerrethanateMoslekalizimitSipasligjit20_2020? 1 : 0,
   userData.eshteObjektApoShtese == "Objekt" ? 1 : 0
 ];
 return dataToRun;
}


let addData = function addData(data){
  var historyRef = database.ref('history');
  historyRef.push(data).then((data)=>{
      console.log("added to database");
  });
}

module.exports = { database, trainBrain, getDataToRun, addData };
