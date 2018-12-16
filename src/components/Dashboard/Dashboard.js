import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      onEditOb: {name: 'If this shows up, you doing great!'}
    }


    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(productID,buttonID){
    if(buttonID === 'delete'){
      console.log('HOC: delete invoked on ' + productID)
      axios.delete(`/api/delete/${productID}`)
        .then(this.props.updateProducts)
        .catch(err => console.log(err.message))
    } else if (buttonID === 'edit'){
      console.log('HOC: edit invoked on ' + productID)
      // console.log(targetObAr)
      this.props.editProduct(productID)
      // setTimeout(console.log('onEditOb is now ', this.state.onEditOb), 3000)
    }
  }

  render(){
    let products = this.props.prodArray.map((product, i) => (<div key={i} className='product'>
    <Product
      productOb ={product}
      handleOnClick={this.handleOnClick}
      editProduct={this.props.editProduct}
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