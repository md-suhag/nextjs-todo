import mongoose from "mongoose";

export const ConnectDB = async () => {
  const username = process.env.user_name;
  const password = process.env.password;
  await mongoose
    .connect(
      `mongodb://${username}:${password}@ac-fmv2w2k-shard-00-00.8jbtvkj.mongodb.net:27017,ac-fmv2w2k-shard-00-01.8jbtvkj.mongodb.net:27017,ac-fmv2w2k-shard-00-02.8jbtvkj.mongodb.net:27017/todoApp?replicaSet=atlas-hgq0hx-shard-0&ssl=true&authSource=admin`
    )
    .then(() => console.log("db connected"))
    .catch((err) => {
      console.log("db not connected");
      console.log(err.message);
      process.exit(1);
    });
};
