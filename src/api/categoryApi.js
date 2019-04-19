import delay from './delay';

const categories = [
    {
        value: 'Books'
    },
    {
        value: 'DVD'
    },
    {
        value: 'Medicine'
    }
];

class CategoryApi {
    static getAllCategories() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(categories)
            }, delay)
        })
    }
}

export default CategoryApi;