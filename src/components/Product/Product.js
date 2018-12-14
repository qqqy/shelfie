import React from 'react'

export default function(props){
  const { name, img, price } = props.productOb
  return(
    <><div>
        <img src={img} alt={name} className='product-image' />
      </div>
      <div className='name-and-price'>
        <div>{name}</div>
        <div>{price}</div>
      </div>
  
    </>
  )
}