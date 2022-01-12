import mongoose from "mongoose";

const connection = {};

async function connect() {
    
    console.log(process.env);

    if (connection.isConnected) {
        console.log("alredy connect");
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log("new Connection")
    connection.isConnected = db.connections[0].readyState;
}

const db = { connect };

export default db;