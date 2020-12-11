import React, { useState, useEffect } from 'react'

function BurgerPane(props) {
    const [ingredients, setIngredients] = useState(props.ingredients)

    console.log(props.ingredients)

    useEffect(() => {
  
    })
    
    const displayBurgerStack = useEffect(() =>{
        ingredients.map((ingredient, index) => {
            return (
            <li key={index}>{ingredient}</li>
            )
        })       
    })

    return (
        <div className="well well-lg">
            <h1>Burger Stack</h1>
            <ul>
                {displayBurgerStack}
            </ul>
        </div>
    )
}

export default BurgerPane