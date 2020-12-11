import './App.css';
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'
import React, { useState } from 'react'

function App() {
  const [burgerStack, setBurgerStack] = useState([])

  const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]

  const addToBurger = (ingredient) => {
    let currentStack = burgerStack;
    currentStack.push(ingredient)
    setBurgerStack(currentStack)
    console.log(burgerStack);
}

  return (
    <div className="App">
      <IngredientList addToBurger={addToBurger} ingredients={ingredients}/>
      <BurgerPane ingredients={burgerStack} />
    </div>
  );
}

export default App;
