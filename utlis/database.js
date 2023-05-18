import mongoose from "mongoose";

let isconnected = false;

export const connectionToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isconnected) {
    console.log("connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "privte_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isconnected = true;
    console.log("mongoDB is Connected");
  } catch (error) {
    console.log(error);
  }
};
