import React, { useState, useEffect } from 'react'
import BurgerPane from './BurgerPane'

function IngredientList(props) {
    const displayIngredients = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} style={{ background:ingredient.color }}>{ingredient.name} <button onClick={(e) => props.addToBurger(ingredient)}>Add to burger</button></li>
        )
    })

    return (
        <div className="well well-lg">
            <h1>Ingredients</h1>
            <ul>
                {displayIngredients}
            </ul>
        </div>
    )
}

export default IngredientList