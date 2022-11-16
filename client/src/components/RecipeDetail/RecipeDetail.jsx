import React from 'react'

const RecipeDetail = ({data}) => {
  return (
    <>
    {Object.entries(data).length === 1 ? (
      <p>{data.error}</p>
    ) : (
      <p>{data.name}</p>
    )}
  </>
  )
}

export default RecipeDetail