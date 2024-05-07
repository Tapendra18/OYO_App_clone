import mongoose from "mongoose";

const URI = "mongodb+srv://Tapendra:iGvDJ3kON0qCPOes@cluster0.rgm2j1z.mongodb.net/OYO";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("DB connection established")
}

export default connectDB;