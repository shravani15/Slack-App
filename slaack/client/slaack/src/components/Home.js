import React from 'react';
import axios from "axios";

class Home extends React.Component {
    constructor() {
      super();
      this.state={
        products:[],
        isLoaded: false
      };
    }
    
    componentDidMount() {
      axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data);
        this.setState(() => ({
          isLoaded: true,
          products: res.data
        }))
      })
      .catch(err => console.log(err))
    }
  
    render() {
      var { isLoaded, products} = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>
      } 
        else {
        return(
            <div className="App">
            <ul>
              {products.map(product => (
                <li key={product.ProductID}>
                <img src={product.ProductImage} alt={product.ProductShortDesc}></img><br/>
                <span>{product.ProductName} <br/></span>
                <span>{product.ProductPrice}</span>
                </li>
              ))}
            </ul> 
          </div>
        )
        }
    };
  };

export default Home;