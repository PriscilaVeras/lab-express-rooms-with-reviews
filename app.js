require("dotenv").config();

const express = require("express");

const connectToDb = require("./config/db.config");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

async function init() {
  try {
    await connectToDb();

    console.log("Conectado ao banco de dados");

    app.user("/", userRouter);

    app.use((err, req, res) => {
      if (err) {
        return res.status(500).json({ erros: err });
      }
    });

    app.listen(4000, () => console.log("Servidor na porta 4000!"));
  } catch (err) {
    console.log("Erro ao conectar com o banco de dados", err);
    process.exit(1);
  }
}

init();
