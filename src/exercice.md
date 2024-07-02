import { useState } from "react";
import List from "./list"

function App() {
//state ("état, données")
let [counter, setCounter] = useState(1);
//useState : definir un state et (1): initialiser state. et je recupere sur counter et je peux modifier par setCounter

  //comportements {handleClick}
const handleClick = () => {
  setCounter(counter + 1); // je modifie le state (counter) en augmentant de 1.
  //ici, le state est mis à jour et tout les composants qui l'utilisent se ré-rendront pour prendre en compte les modifications.
}
  //affichage (render)
  return (
    <div>
  <h1>{counter}</h1>
  <button onClick={handleClick}>Incrément</button>
    </div>
  )
}

export default App;

######
import { useState } from "react"


function List() {
let [listFruit, setListFruit] = useState();

// Initialisation de la liste de fruits
const fruits = ["Apple", "Banana", "Orange"];

// Ajout d'un fruit à la liste
const handleAddFruit = (fruit) => {
    setListFruit([...listFruit, fruit]);
}

// Suppression d'un fruit de la liste
const handleRemoveFruit = (fruit) => {
    setListFruit(listFruit.filter((item) => item!==fruit));
}

return (
    <div>
        <h1>Ajouter un fruit</h1>
        <input type="text" placeholder="Ajouter un fruit" />
        <button onClick={() => handleAddFruit("Fruit ajouté")}>Ajouter</button>
        <h1>Liste des fruits</h1>
        <ul>
            {listFruit && listFruit.map((fruit) => (
                <li key={fruit}>
                    {fruit}
                    <button onClick={() => handleRemoveFruit(fruit)}>Supprimer</button>
                </li>
            ))}
        </ul>
        <button onClick={() => setListFruit([])}>Tout supprimer</button>
    </div>
 
    )
}
export default List;