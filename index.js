import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import postRoutes from './routes/posts.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({  extended: false }));
app.use(cors());

app.use('/posts', postRoutes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const CONNECTION_URL = 'mongodb+srv://kabyldorado:Drowssap2020@cluster0.kjpdv.mongodb.net/kabyldorado_db?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.MONGODB_URI || CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
