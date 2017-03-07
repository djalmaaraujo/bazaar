import React from 'react'
import Layout from '../components/layout'
import Brands from '../components/brands'
import ProductsList from '../components/productsList'
import Products from '../data/products'

export default class extends React.Component {
  static getInitialProps() {
    return {
      products: Products
    }
  }

  render () {
    return <Layout>
      <ProductsList products={this.props.products} />
      <Brands />
    </Layout>
  }
}
