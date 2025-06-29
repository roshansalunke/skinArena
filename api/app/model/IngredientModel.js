const mongoose = require("mongoose")

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  benefits: [String],
  comedogenic_rating: Number,
  safety_rating: Number,
  suitable_for: [String] // e.g., ["oily", "dry", "acne-prone"]
}, { timestamps: true });


module.exports = mongoose.model('Ingredient', ingredientSchema);
