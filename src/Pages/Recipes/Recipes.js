import React from 'react'
import Recipe from './Recipe/Recipe'

const Recipes = ({recipes,value}) => {
  return (
    <div className="container">
    {recipes.map((recipe)=>{
    return(recipe.name.toUpperCase().indexOf(value.toUpperCase())!==-1 && <Recipe key={Math.random()} recipe={recipe} />)
    })}
  </div>
  )
}

export default Recipes
