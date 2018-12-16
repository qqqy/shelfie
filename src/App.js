import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'
import routes from './routes'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // currentProduct: {} ,
      // test: '',
    }

    // this.updateProducts = this.updateProducts.bind(this)
    // this.createProduct = this.createProduct.bind(this)
    // this.editProduct = this.editProduct.bind(this)
    // this.saveChanges = this.saveChanges.bind(this)
    
  }

  // componentDidMount(){
  //   this.updateProducts()
  // }

  // createProduct(name,price,img){
  //   axios.post('/api/product' , {
  //     name: name ,
  //     price: price ,
  //     img: img
  //   }).then(this.updateProducts)
  //   .catch(err => console.log(err.message))
  // }

  // editProduct(productID){
  //   let target = this.state.products.find((productOb) => productOb.id === productID)
  //   this.setState({
  //     currentProduct: target
  //   })
  // }

  // saveChanges(id, updatedProd){
  //   console.log('Save Changes Invoked!' , id , updatedProd)
  //   axios.put(`/api/edit/${id}` , updatedProd)
  //     .then(this.updateProducts)
  //     .catch(err => alert(err.message))
  // }
  
  render() {
    return (
      <>
      <Header />
      {routes}
      </>
      // <div className="App">
      //   <header>
      //     <Header />
      //     <button onClick={() => this.editProduct(1)}>Change Target</button>
      //     <button onClick={() => console.log(this.state.currentProduct)}>console.log</button>
      //   </header>
      //     <div>
      //     </div>
      //     <div className='form'>
      //     <Form
      //       createProduct={this.createProduct}
      //       currentProduct={this.state.currentProduct}
      //       saveChanges={this.saveChanges}
      //       />
      //     </div>
      // </div>
    );
  }
}

export default App;
