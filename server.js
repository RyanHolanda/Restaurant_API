const express = require('express')
const cors = require('cors')
const Item = require('./config_items')
const { userInfo } = require('os')
const StoreStatus = require('./config_store_status')
const Orders = require('./config_orders')
const functions = require("firebase-functions");
const app = express()
app.use(express.json())
app.use(cors())




app.get("/items", async (req, res) => {
    const snapshot = await Item.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});

app.post("/create/item", async (req, res) => {
    const data = req.body;
    await Item.add(data);
    res.send({ msg: "Item added" })
});

app.post("/update/item", async (req, res) => {
    const id = req.body.id;
    const data = req.body;
    delete req.body.id;
    await Item.doc(id).update(data);
    res.send({ msg: "updated" });
});

app.post("/delete/item", async (req, res) => {
    const id = req.body.id;
    await Item.doc(id).delete();
    res.send({ msg: "Deleted" });
});





app.get("/storeStatus", async (req, res) => {
    const snapshot = await StoreStatus.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});

app.post("/update/storestatus", async (req, res) => {
    const id = req.body.id;
    const data = req.body;
    delete req.body.id;
    await StoreStatus.doc(id).update(data);
    res.send({ msg: "updated" });
});



app.get("/orders", async (req, res) => {
    const snapshot = await Orders.get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});

app.post("/create/orders", async (req, res) => {
    const data = req.body;
    const id = req.body.id;
    await Orders.add(data);
    res.send({ msg: id })
});

app.post("/update/orders", async (req, res) => {
    const id = req.body.id;
    const data = req.body;
    delete req.body.id;
    await Orders.doc(id).update(data);
    res.send({ msg: "Order updated" });
});

exports.app = functions.https.onRequest(app);


