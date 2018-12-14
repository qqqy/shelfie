import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{

  render(){
    let products = this.props.prodArray.map((product, i) => (<div key={i} className='product'>
    <Product
      productOb ={product}
     />
    </div>))
    return(
      <div>Dashboard
        {products}
      </div>
    )
  }
}

export default Dashboard