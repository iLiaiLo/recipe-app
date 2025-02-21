import React from 'react'

const Steps = ({recipe}) => {
  return (
    <article>
        <div className="header">Steps:</div>
        {recipe.steps.map(item=>{
            return(<li className="steps" key={Math.random()}>{item}</li>)
        })}
    </article>
  )
}

export default Steps