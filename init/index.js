const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
    .then((res) => {
        console.log("connected to database successfully");
    })
    .catch((err) => {
        console.log(err);
    })

const initDB = async() => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj, owner : '668d187c95380314fb7af87e'}));
    await Listing.insertMany(initdata.data);
    console.log('data was initialized');
};

initDB();