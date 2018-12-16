import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom'
import axios from 'axios'

const defaultPic = 'https://www.capitalfm.co.ke/lifestyle/files/mobile/2018/10/web-mr-bean-atkinson-bbc-uk-600x400.jpg'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      image: defaultPic,
      name: '' ,
      price: '',
      currentProduct: null,
      rightButtonText: 'Add to Inventory',
      redirect: false,
    }
    this.inputOnChange = this.inputOnChange.bind(this)
    this.buttonOnClick = this.buttonOnClick.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    // this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }

  componentDidMount(){
    if(this.props.match.params.id){
      console.log('We editing fam sqwwwaaad')
      this.setState({
        rightButtonText: 'Save Changes',
        currentProduct: this.props.match.params.id
      })
      axios.get(`/api/inventory?id=${this.props.match.params.id}`)
      .then((res) => {this.setState({
        image: res.data[0].img,
        name: res.data[0].name,
        price: res.data[0].price
      })
      console.log(res.data[0])})
    } else {
      console.log('We gon add')
    }
  }

  saveChanges(id, updatedProd){
    console.log('Save Changes Invoked!' , id , updatedProd)
    axios.put(`/api/edit/${this.props.match.params.id}` , updatedProd)
      .then(() => this.setState({
        redirect: true
      }))
      .catch(err => alert(err.message))
  }

  // componentDidUpdate(){
  //   console.log('Target Changed')
  // }
  
  // clearState(){
  //   this.setState({
  //     image: defaultPic,
  //     name: '',
  //     price: '',
  //     currentProduct: null,
  //     rightButtonText: 'Add to Inventory'
  //   })
  // }

  inputOnChange(input, value){
    this.setState({
      [input]: value
    })
    // console.log(this.state[input])
  }

  createProduct(name,price,img){
    axios.post('/api/product' , {
      name: name ,
      price: price ,
      img: img
    }).then(() => this.setState({
      redirect: true,
    }))
    .catch(err => console.log(err.message))
  }

  // editProduct(productID){
  //   let target = this.state.products.find((productOb) => productOb.id === productID)
  //   this.setState({
  //     currentProduct: target
  //   })
  // }
  
  buttonOnClick(buttonID){
    if(buttonID === 'Cancel'){
      this.clearState()
    } else if (buttonID === 'Add' && this.state.currentProduct === null){
      this.createProduct(this.state.name,this.state.price,this.state.image)
      // console.log(this.state.currentProduct)
      // this.clearState()
    } else if (buttonID === 'Add' && this.state.currentProduct !== null){
      // console.log('Edit invoked on ' , this.state.currentProduct)
      const {name, price, image } = this.state
      // console.log(name , price , image )
      this.saveChanges(this.props.match.params.id,{name: name, price: price, img: image})
      // this.clearState()
    }
  }
  
  
  render(){
    let redirect;
    this.state.redirect ? redirect = <Redirect to='/'/> : console.log('redirect false')
    return(
      <div>
        {redirect}
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
          <Link to='/'><button>Cancel</button></Link> 
          <button onClick={() => this.buttonOnClick('Add')}>{this.state.rightButtonText}</button>
          
        </div>
      </div>
    )
  }
}

export default Form
