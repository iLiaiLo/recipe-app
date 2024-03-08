import React from "react";
import { useState,useEffect } from "react";


function App() {
  const [recipes,setRecipes]=useState([]);
  const [value,Setvalue]=useState("")
  const [disp,setDisp]=useState(false)

useEffect(()=>{
  if(value){
    setDisp(true)
  }
  else{
    setDisp(false)
  }
},[value])

useEffect(()=>{
  getRecipes()
},[])

const getRecipes=async ()=>{
  const response=await fetch("./foodrecipe.json");
  const data=await response.json();
  setRecipes(data)
}

  return (
    <div className="Content">
    <input type="text" placeholder="Search a food recipe..." onChange={(e)=>Setvalue(e.target.value)}/>
    {
    disp && <div className="container">
      {recipes.map((recipe)=>{
      return(
      recipe.name.toUpperCase().indexOf(value.toUpperCase())!==-1 && <div className="Recipes" key={Math.random()}>
        <h1>{recipe.name}</h1>
        <img src={recipe.imageURL} alt="alternative" height="300" />

        <article>
          <div className="header">Ingredients:</div>
          {recipe.ingredients.map(item=>{
            return(<div key={Math.random()} className="recipeContainer">
              <li>{item.quantity} {item.name}</li>
            </div>)
          })}
          </article>

          <article>
            <div className="header">Steps:</div>
            {recipe.steps.map(item=>{
              return(<li className="steps" key={Math.random()}>{item}</li>)
            })}
          </article>
        <hr />
      </div>)
    })}
    </div>
    }
  </div>

  );
}

export default App;
