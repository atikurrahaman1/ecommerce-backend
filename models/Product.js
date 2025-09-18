const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  category: {
    type: String,
    required: [true, 'Please add a category']
  },
  countInStock: {
    type: Number,
    required: [true, 'Please add stock count'],
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
