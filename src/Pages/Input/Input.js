import React from 'react'

const Input = ({handleChange}) => {
  return (
    <input type="text" placeholder="Search a food recipe..." onChange={handleChange}/>
  )
}

export default Input