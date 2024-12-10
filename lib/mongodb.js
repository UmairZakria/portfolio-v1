import mongoose from "mongoose";


// const uri = 'mongodb://localhost:27017/umair0'
const uri = 'mongodb+srv://umairzakria6:2KLmxrULOGN5TeM7@cluster0.5dcfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

let isConnected = false;

export default async function connectMongo() {
    if (isConnected) {
        return;
    }

    await mongoose.connect(uri);

    isConnected = true;
}