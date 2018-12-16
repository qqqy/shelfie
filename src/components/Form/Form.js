import React, { Component } from 'react'

const defaultPic = 'https://www.capitalfm.co.ke/lifestyle/files/mobile/2018/10/web-mr-bean-atkinson-bbc-uk-600x400.jpg'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      image: defaultPic,
      name: '' ,
      price: '',
      currentProduct: null,
      rightButtonText: 'Add to Inventory'
    }
    this.inputOnChange = this.inputOnChange.bind(this)
    this.buttonOnClick = this.buttonOnClick.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentProduct !== this.props.currentProduct){
      console.log('Target Changed')
      const {name, id, img, price} = this.props.currentProduct
      this.setState({
        rightButtonText: 'Save Changes',
        name: name,
        currentProduct: id,
        price: price,
        image: img
      })
      
    }

  }

  clearState(){
    this.setState({
      image: defaultPic,
      name: '',
      price: '',
      currentProduct: null,
      rightButtonText: 'Add to Inventory'
    })
  }

  inputOnChange(input, value){
    this.setState({
      [input]: value
    })
    // console.log(this.state[input])
  }

  buttonOnClick(buttonID){
    if(buttonID === 'Cancel'){
      this.clearState()
    } else if (buttonID === 'Add' && this.state.currentProduct === null){
      this.props.createProduct(this.state.name,this.state.price,this.state.image)
      // console.log(this.state.currentProduct)
      // this.clearState()
    } else if (buttonID === 'Add' && this.state.currentProduct !== null){
      // console.log('Edit invoked on ' , this.state.currentProduct)
      const {name, price, image, currentProduct} = this.state
      // console.log(name , price , image )
      this.props.saveChanges(currentProduct,{name: name, price: price, img: image})
      this.clearState()
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
          <button onClick={() => this.buttonOnClick('Add')}>{this.state.rightButtonText}</button>
          
        </div>
      </div>
    )
  }
}

export default Form