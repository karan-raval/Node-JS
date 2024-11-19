import React from 'react'

const Allbooks = () => {
  fetch("http://localhost:1234/addBook")
  .then(Res => Res.json())
  .then(Res=>Res)
  return (
    <>

    </>
  )
}

export default Allbooks