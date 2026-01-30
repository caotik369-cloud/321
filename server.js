import express from "express";

const app = express();
app.use(express.json());

app.post("/pay", (req, res) => {
  const { number, expiry, cvv } = req.body;

  console.log("Procesando tarjeta:", number);

  res.send({ status: "ok" });
});

app.listen(3000);
