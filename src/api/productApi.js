import delay from './delay';


const products = [
    {
        id: 1,
        name: 'React In Action',
        category: 'Books',
        price: 35
    },
    {
        id: 2,
        name: 'Hadoop In Action',
        category: 'Books',
        price: 100
    },
    {
        id: 3,
        name: 'Angular In Action',
        category: 'Books',
        price: 60
    },
];

class ProductApi {
    static getAllProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(products)
            }, delay)
        })
    }

    static saveProduct(product){
        product = Object.assign({}, product);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(product.id) {
                    const existingIndex = products.findIndex(p => p.id === product.id)
                    products.splice(existingIndex,1,product)
                } else {
                    product.id = 444;
                    products.push(product)
                }

                resolve(product);
            }, delay)
        })
    }
}

export default ProductApi;