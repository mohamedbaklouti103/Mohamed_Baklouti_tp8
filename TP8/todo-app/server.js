const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/tp8')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Erreur MongoDB:", err));

app.use(cors());
app.use(express.json());

// Modèle Mongoose
const Task = require('./models/Task');

// Route : récupérer les tâches
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

// Route : ajouter une tâche
app.post('/tasks', async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.send(task);
});

app.listen(5000, () => console.log("Backend sur port 5000"));
