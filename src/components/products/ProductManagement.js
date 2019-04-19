import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import * as productActions from '../../actions/productAction';


class ProductManagement extends Component {
    state = {
        isList: true,
        product: {},
        errors: {}
    }

    componentDidMount() {
        const { getMyProducts } = this.props;
        getMyProducts();
    }

    render() {
        const { isList, product, errors } = this.state;
        const { products, categories } = this.props;

        return (
            <div>
                <h1>ProductManagement</h1>
                {
                    isList && (
                        <ProductList products={products}/>
                    )
                }

                {
                    !isList && (
                        <ProductForm product={product} errors={errors} categories={categories}/>
                    )
                }
            </div>
        );
        
    }

    toggleView = () => {
        this.setState({
            isList: !this.state.isList
        })
    }
}

function mapStateToProps(state, ownProps) {
    console.log('state', state);
    
    return {
        categories: state.categories,
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMyProducts: () => dispatch(productActions.getAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductManagement);