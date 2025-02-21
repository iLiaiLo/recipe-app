import React from 'react'
import Ingredient from '../Ingredients/Ingredient'
import Steps from '../Steps/Steps'

const Recipe = ({recipe}) => {
  return (
    <div className="Recipes" key={Math.random()}>
    <h1>{recipe.name}</h1>
    <img src={recipe.imageURL} alt="alternative" height="300" />
    <Ingredient recipe={recipe} />
    <Steps recipe={recipe} />
    <hr />
</div>
  )
}

export default Recipe