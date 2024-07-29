import express from "express";
import db_connect from "./config/db_connect.js";
import livro from "./models/livro.js";

const app = express();
app.use(express.json());

await db_connect(process.env.DB_CONNECTION_STRING);

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = req.params.id;
    const item = livros.find((livro) => livro.id === Number(index));
    if (!item) res.status(404).send({ message: "Item não encontado" });
    res.status(200).json(item);
});

app.post("/livros", (req, res) => {
    const novoItem = req.body;
    const idDoUltimolivro = livros[livros.length - 1].id;
    livros.push({ id: idDoUltimolivro + 1, ...novoItem });
    res.status(201).send({ message: `Livro ${novoItem.titulo} criado com sucesso` });
});

app.put("/livros/:id", (req, res) => {
    const index = req.params.id;
    const novoTitulo = req.body.titulo;
    const item = livros.find((livro) => livro.id === Number(index));
    item.titulo = novoTitulo;
    res.status(200).send({ message: "O item foi modificado com sucesso" });
});

app.delete("/livros/:id", (req, res) => {
    const index = req.params.id;
    livros = livros.splice(index - 1, 1);
    res.status(204).send({ message: "O item foi removido com sucesso" });
});

export default app;