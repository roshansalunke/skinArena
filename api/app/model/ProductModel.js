const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  type: { type: String, required: true }, // sunscreen, face wash, etc.
  skin_type: [String],
  spf: Number,
  pa_rating: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  price: Number,
  quantity: String,
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  image_urls: [String],
  description: String,
  features: [String],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
