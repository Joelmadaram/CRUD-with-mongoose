const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
    console.log("connection open")
    })
    .catch(err => {
    console.log("error", err)
    })

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty : {
            online: {
                type: Number,
                default: 0
            },
            instore: {
                type: Number,
                default: 0
            }
        },
        size : {
            type: String,
            enum: ['S', 'M', 'L']
        }
    });

    productSchema.methods.greet = function () {
        console.log('Welcome to shopApp') 
    }

    const Product = mongoose.model('Product', productSchema);

    const findProduct = async () => {
        const foundProduct = await Product.findOne({ name: 'Bike Helmet'});
        foundProduct.greet();
    }

    findProduct(); 


    
    const bike = new Product({name: 'Cycling Suit', price: 29, categories: ['Cycling'], size: 'L' });
    bike.save()
    .then((data) => {
        console.log('Yey!!!!!')
        console.log(data)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })

    Product.findOneAndUpdate({name: 'Tire Pump '}, { price: -19 }, {new: true, runValidators: true})
        .then(data => {
            console.log('Yey!!!!!')
            console.log(data);
        })
        .catch(err => {
            console.log("error")
            console.log(err)
        })