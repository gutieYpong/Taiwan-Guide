import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
// import postRoutes from './routes/posts.js';

const PORT = process.env.PORT || 5000;
const app = express();
// dotenv.config();

app.use( bodyParser.json({ limit: "30mb", extended: true }) );
app.use( bodyParser.urlencoded({ limit: "30mb", extended: true }) );
// app.use( cors() );

// app.use( '/posts', postRoutes );

app.use('/', (req, res) => {
  res.send("Hello to Taiwan-Guide API.");
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));