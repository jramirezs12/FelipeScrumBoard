const mongoose = require("mongoose");

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("Connection with MongoDB: Succesful and beauty");
    } catch (e) {
        console.log("Connection with MongoDB failed: ", e);
        throw new Error("Connection with MongoDB failed");
    }
};

module.exports = { dbConnection };