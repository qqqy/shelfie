import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      products: [] ,
      onEditOb: {name: 'If this shows up, you doing great!'}
    }


    this.handleOnClick = this.handleOnClick.bind(this)
    this.updateProducts = this.updateProducts.bind(this)
  }

  componentDidMount(){
    this.updateProducts()
  }

  updateProducts(){
    console.log('UP: invoked')
    axios.get('http://localhost:4000/api/inventory')
      .then((res) => {
        this.setState({ products: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err.message))
  }

  handleOnClick(productID,buttonID){
    if(buttonID === 'delete'){
      console.log('HOC: delete invoked on ' + productID)
      axios.delete(`/api/delete/${productID}`)
        .then(this.updateProducts)
        .catch(err => console.log(err.message))
    } else if (buttonID === 'edit'){
      console.log('HOC: edit invoked on ' + productID)
      // console.log(targetObAr)
      // this.props.editProduct(productID)
      // setTimeout(console.log('onEditOb is now ', this.state.onEditOb), 3000)
    }
  }

  render(){
    let products = this.state.products.map((product, i) => (<div key={i} className='product'>
    <Product
      productOb ={product}
      handleOnClick={this.handleOnClick}
      // editProduct={this.props.editProduct}
     />
    </div>))
    return(
      <div className='dashboard-main'>
        {products}
      </div>
    )
  }
}

export default Dashboard