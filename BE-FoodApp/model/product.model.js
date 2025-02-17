const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: Number, required: true },
    idCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true },
    idDiscount: { type: mongoose.Schema.Types.ObjectId, ref: 'discuont', required: true },

})

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;