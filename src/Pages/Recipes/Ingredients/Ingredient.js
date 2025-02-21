import React from 'react'

const Ingredient = ({recipe}) => {
  return (
    <article>
        <div className="header">Ingredients:</div>
        {recipe.ingredients.map(item=>{
          return(<div key={Math.random()} className="recipeContainer">
            <li>{item.quantity} {item.name}</li>
          </div>)
        })}
        </article>
  )
}

export default Ingredient