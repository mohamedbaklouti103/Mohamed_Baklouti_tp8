import React, { useState } from 'react';  
import './MiniApp.css';  
function TodoApp() {  
// Déclare un tableau d'état `todos` pour stocker les tâches  
const [todos, setTodos] = useState([]);  
const [task, setTask] = useState("");  
// Variable pour saisir la tâche  
// Fonction pour ajouter une tâche  
const addTask = () => { if (task.trim() !== "") {  
setTodos([...todos, { id: Date.now(), text: task, completed: false }]); setTask(""); 
// Réinitialiser le champ de saisie  
}  
};  
// Fonction pour marquer une tâche comme complétée  
const toggleCompletion = (id) => {  
setTodos(todos.map(todo => todo.id === id ?  
{ ...todo, completed: !todo.completed } : todo )); };  
// Fonction pour supprimer une tâche  
const deleteTask = (id) => {  
setTodos(todos.filter(todo => todo.id !== id));  
};  
return (  
<div className="todo-app">  
<h1>Todo List</h1>  
<input type="text" value={task} onChange={(e) => setTask(e.target.value)} 
placeholder="Ajouter une tâche" />  
<button onClick={addTask}>Ajouter</button>  
<ul>  
{todos.map(todo => (  
<li key={todo.id} className={todo.completed ? 'completed' : ''}> 
  <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>  
<button onClick={() => deleteTask(todo.id)}>Supprimer</button>  
</li> ))} 
</ul> 
</div>  
); 
}  
function App() {  
return ( <div className="App"> <TodoApp /> </div> );  
}  
export default App; 