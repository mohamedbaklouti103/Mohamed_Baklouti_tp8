import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(response => setTasks(response.data));
  }, []);

  const handleAddTask = () => {
    if (!newTask) return;

    axios.post("http://localhost:5000/tasks", { title: newTask })
      .then(response => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      });
  };

  return (
    <div>
      <h1>Liste des tâches</h1>

      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={handleAddTask}>Ajouter</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
