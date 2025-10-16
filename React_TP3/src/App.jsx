import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Bienvenue({ nom }) { 
return <h1>Bienvenue, {nom} !</h1>; 
} 



function Compteur() {
  const [compteur, setCompteur] = useState(0);

  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  const decrementer = () => {
    setCompteur(compteur - 1);
  };
  return(
    <div>
      <h2>Compteur : {compteur}</h2>
      <button onClick={incrementer}>+</button>
      <button onClick={decrementer}>-</button>
    </div>
  )

}



function Form() { 
  const [nom, setNom] = useState("");

  const handleClick = () => {
    alert("Bonjour, " + nom + " !");
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={handleClick}>Alert</button> 
    </div>
  );
}

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");

  const ajouterArticle = () => {
    if (nouvelArticle.trim() !== "") {
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle("");
    }
  };

  return (
    <div>
      <h2>Liste de courses</h2>
      <input 
        type="text"
        placeholder="Ajouter un article"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
      />
      <button onClick={ajouterArticle}>Ajouter</button>

      <ul>
        {articles.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


function App() {
 

  return (
    <>
 <Bienvenue nom="Mohamed" /> 
 <Compteur/>
 <Form/>
<ListeCourses />
    </>
   
  )
}

export default App




















