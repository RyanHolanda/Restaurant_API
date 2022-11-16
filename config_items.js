
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

const firebase_admin = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    }
);
const db = admin.firestore();
const Item = db.collection("Items");


module.exports = Item;