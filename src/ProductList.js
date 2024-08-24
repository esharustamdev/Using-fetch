import React, { useState } from 'react'

const ProductList = () => {
  const [Data, setData] = useState([])
  const getData = () => {
    fetch('http://fakestoreapi.com/products')
      .then((x) => x.json())
      .then((y) => setData(y))
  }
  getData()
  return (
    <>
      <div className='prodHead'>
        <h1>Products List</h1>
      </div>
      <div className='productCont'>
        {Data.map((x) => (
          <>
            <div className='prodMain'>
              <div className='prodImg'>
                <img src={x.image} alt='' />
              </div>
              <div className='prodBody'>
                <h1>{x.title}</h1>
                <p>{x.description}</p>
                <h3> Price : {x.price}</h3>
              </div>
              <div className='prodBtn'>
                <button>Add To Cart</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default ProductList
