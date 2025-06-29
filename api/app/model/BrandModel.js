const mongoose = require("mongoose")

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  logo_url: String,
  description: String,
  country: String
}, { timestamps: true });



module.exports = mongoose.model('Brand', brandSchema);
