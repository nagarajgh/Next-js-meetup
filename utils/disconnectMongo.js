import mongoose from "mongoose"

const disconnrctMongo = () => mongoose.connection.close();

export default disconnrctMongo;