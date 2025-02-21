import React from "react";
import { useState,useEffect } from "react";
import Input from "./Pages/Input/Input";
import Recipes from "./Pages/Recipes/Recipes";


function App() {
  const [recipes,setRecipes]=useState([]);
  const [value,Setvalue]=useState("")
  const [disp,setDisp]=useState(false)

useEffect(()=>{
  const getRecipes=async ()=>{
    const response=await fetch("./foodrecipe.json");
    const data=await response.json();
    setRecipes(data)
  }
  getRecipes()
},[])

const handleChange=(e)=>{
  e.target.value?setDisp(true):setDisp(false);
  Setvalue(e.target.value);
}



  return (
    <div className="Content">
    <Input handleChange={handleChange} />
    {disp && <Recipes recipes={recipes} value={value}/>}
    </div>

  );
}

export default App;
