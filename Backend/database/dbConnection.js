import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Life_Care_Hospital",
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};
