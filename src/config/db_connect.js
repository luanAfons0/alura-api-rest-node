import mongoose from "mongoose";

export default async function db_connect(connection_string) {
    mongoose.connect(connection_string);

    mongoose.connection.on("error", (error) => {
        console.error("Erro na conexão com o banco de dados: " + error);
    });

    mongoose.connection.once("open", () => {
        console.log("Conexão com banco de dados estabelecida");
    });
};