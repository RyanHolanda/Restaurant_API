var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

const db = admin.firestore();
const StoreStatus = db.collection("Store Status");


module.exports = StoreStatus;