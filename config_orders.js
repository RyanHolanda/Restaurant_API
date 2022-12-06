var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");


const db = admin.firestore();
const Orders = db.collection("Orders");


module.exports = Orders;