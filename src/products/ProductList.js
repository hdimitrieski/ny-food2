import React, {Component} from 'react';
import {Product} from './Product';
import './ProductList.css';

export class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    //TODO fetch data from server
    const products = [
      {id: 1, name: 'Jaffa Cakes', grade: 'C', type: 'Cookies'},
      {id: 2, name: 'Kefir', grade: 'A', type: 'Dairy'},
      {id: 3, name: 'Yogurt', grade: 'A', type: 'Dairy'}
    ];

    this.setState({products});
  }

  render() {
    const {products} = this.state;
    return (
      <div>
        <h4>Products</h4>
        <div className="product-list">
          {
            products.map(product =>
              <Product key={product.id} {...product} />
            )
          }
        </div>
      </div>
    );
  }
}