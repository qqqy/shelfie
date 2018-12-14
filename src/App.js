import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [
        {name: 'TwistyNips',image: "https://i.redd.it/048gh28fxax11.jpg", price: 3,},
        {name: 'CorBloom Angery Bites',image: 'https://i.ytimg.com/vi/daoTiDaCLg8/maxresdefault.jpg', price: 7,},
        {name: 'Pantywaister Repellent',image: 'http://www.dumpaday.com/wp-content/uploads/2018/01/funny-animals-1-5.jpg', price: 3,},
        {name: 'Count Dooku`s Dookie Counter',image: 'https://previews.123rf.com/images/asiln/asiln1408/asiln140800055/30823933-censored-stamp.jpg', price: 10,}
      ]
    }
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
