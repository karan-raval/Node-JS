import React from 'react'

const HomePage = () => {
  fetch("http://localhost:3344/allmovie")
  .then(Res => Res.json())
  .then(Res=>
    console.log(res)
  )
  return (
    <>
    
    </>
  )
}

export default HomePage