import mongoose from "mongoose";
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://*******:******@projeto-node.2omkwsm.mongodb.net/curso-node");

let db = mongoose.connection;
export default db
