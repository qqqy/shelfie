import React, { Component } from 'react'

const defaultPic = 'https://www.capitalfm.co.ke/lifestyle/files/mobile/2018/10/web-mr-bean-atkinson-bbc-uk-600x400.jpg'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      image: defaultPic,
      name: '' ,
      price: '',
    }
    this.inputOnChange = this.inputOnChange.bind(this)
  }

  inputOnChange(input, value){
    this.setState({
      [input]: value
    })
    console.log(this.state[input])
  }

  buttonOnClick(buttonID){
    if(buttonID === 'Cancel'){
      this.setState({
        image: defaultPic,
        name: '',
        price: '',
      })
    } else if (buttonID === 'Add'){
      console.log(`Waiting on Fuctionality`)
    }
  }


  render(){
    return(
      <div>
        <div>
          <input 
            onChange={(e) => this.inputOnChange('image', e.target.value)}
            placeholder='Image URL'
            value={this.state.image}
           />
        </div>
        <div>
          <input 
            onChange={(e) => this.inputOnChange('name', e.target.value)}
            placeholder='Name Your Product'
            value={this.state.name}
           />
        </div>
        <div>
          <input 
            onChange={(e) => this.inputOnChange('price', e.target.value)}
            placeholder='Product Price'
            value={this.state.price}
           />
        </div>

        <div>
          <button onClick={() => this.buttonOnClick('Cancel')}>Cancel</button>
          <button onClick={() => this.buttonOnClick('Add')}>Add to Inventory</button>
          
        </div>
      </div>
    )
  }
}

export default Form