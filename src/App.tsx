import { useState } from "react"

function App() {

 const [fruits, setFruits] = useState([
  {id: 1, name: "Apple"},
  {id: 2, name: "Banana"},
  {id: 3, name: "Orange"}
]);
const [nouveauFruit, setNouveauFruit] = useState("");

const handleDelete = (id) => {
  //1.copie du tableau:  slice() ou [... xxx] spread operator
const fruitsCopy = [...fruits];
  //2. manipuler le state
const fruitCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id)
  //3. modifier le state avec le setter
setFruits(fruitCopyUpdated)
};
const handleSubmit = (e) => {
e.preventDefault(); 
const fruitsCopy = [...fruits];
const id = new Date().getTime();
const nom = nouveauFruit;
fruitsCopy.push({id, name: nom});
setNouveauFruit(fruitsCopy);
};

const handleChange = (e) => {
setNouveauFruit(e.target.value);
};

return (
    <div>
        <h3>Liste de fruits</h3>
        <ul>{fruits.map((fruit) =>(
          <li key={fruit.id}>{fruit.name} <button onClick={() => handleDelete(fruit.id)}>X</button> </li>
        ))}</ul>
        <form action="submit" onSubmit={handleSumit}>
          <input value={nouveauFruit} type="text" placeholder="Ajouter un fruit" onChange={handleChange}/>
          <button>Ajouter</button>
        </form>

    </div>
 
    )
}
export default App