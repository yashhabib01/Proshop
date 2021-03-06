import mongoose from "mongoose";

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Connect To ${conn.connection.host} Connected To Db`);
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

export default connect;
