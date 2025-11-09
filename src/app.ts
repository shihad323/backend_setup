import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Server");
});

export default app;
