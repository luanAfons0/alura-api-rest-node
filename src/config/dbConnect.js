import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  mongoose.connection.on("error", (error) => {
    console.error("Erro na conexão com o banco de dados: " + error);
  });

  mongoose.connection.once("open", () => {
    console.log("Conexão com banco de dados estabelecida");
  });

  return mongoose.connection;
};

export default conectaNaDatabase;
