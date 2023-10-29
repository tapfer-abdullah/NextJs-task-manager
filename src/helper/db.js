import { Users } from "@/models/users";
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DB_URL, {
            dbName: "nextTaskManager"
        });

        // const newUser = new Users({
        //     name: "AK",
        //     email: "ak@bk.com",
        //     password: "akaaa",
        //     about: "lorem20"
        // });

        // const result = await newUser.save();
        // console.log(result)

        console.log("Connected to DB....");
        // console.log(connection);
    }
    catch (error) {
        console.log("Failed to connect to DB!");
        console.log(error)
    }
}