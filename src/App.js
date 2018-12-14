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
  }

  componentDidMount(){
    axios.get('/api/inventory')
      .then((res) => {
        this.setState({ products: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err.message))
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
          <Dashboard
            prodArray={this.state.products}
          />
         <Form />
      </div>
    );
  }
}

export default App;
