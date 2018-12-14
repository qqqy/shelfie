import React from 'react'

export default function(props){
  const { id, name, img, price } = props.productOb
  return(
    <><div>
        <img src={img} alt={name} className='product-image' />
      </div>
      <div className='product-info'>
        <div className='name-and-price'>
          <div>{name}</div>
          <div>{price}</div>
        </div>
        <div className='delete-and-edit'>
          <div><button onClick={() => props.handleOnClick(id,'delete')}>Delete</button></div>
          <div><button onClick={() => props.handleOnClick(id,'edit')}>Edit</button></div>
        </div>
      </div>
  
    </>
  )
}