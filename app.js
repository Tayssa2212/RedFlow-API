const express = require("express");
const app = express();

const donorRoutes = require("./routes/donorRoutes");
const donationRoutes = require("./routes/donationRoutes");
const stockRoutes = require("./routes/stockRoutes"); // NOVO

// Middlewares
app.use(express.json());

// Rotas
app.use("/doadores", donorRoutes);
app.use("/doacoes", donationRoutes);
app.use("/estoque", stockRoutes); // NOVO

module.exports = app;
