import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }

    this.updateProducts = this.updateProducts.bind(this)
    this.createProduct = this.createProduct.bind(this)
    
  }

  componentDidMount(){
    this.updateProducts()
  }

  updateProducts(){
    console.log('UP: invoked')
    axios.get('/api/inventory')
      .then((res) => {
        this.setState({ products: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err.message))
  }

  createProduct(name,price,img){
    axios.post('/api/product' , {
      name: name ,
      price: price ,
      img: img
    }).then(this.updateProducts)
    .catch(err => console.log(err.message))
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
          <div>
          <Dashboard
            prodArray={this.state.products}
            updateProducts={this.updateProducts}
            products={this.state.products}
            />
          </div>
          <div className='form'>
          <Form
            createProduct={this.createProduct}
            />
          </div>
      </div>
    );
  }
}

export default App;
