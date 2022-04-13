import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import DAO from "./dao/DAO.js";
dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT;

MongoClient.connect(process.env.DB_URI, {
  maxPoolSize: 50, //Max 50 user connected
  wtimeoutMS: 2500, //Timeout request after 2500ms
})
  .catch((error) => {
    //Catch any error, log it and exit with error code 1
    console.error(error);
    process.exit(1);
  })
  .then(async (client) => {
    // If no error occurs run async function
    await DAO.injectDB(client); // Initial reference database MongoDB
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  });
