const ProductModel = require('../model/ProductModel');
const BrandModel = require('../model/BrandModel');
const CategoryModel = require('../model/CategoryModel');
const IngredientModel = require('../model/IngredientModel');

exports.addProduct = async (req, res) => {
  try {
    const { product, brand, category, ingredients } = req.body;

    // Brand
    let brandDoc = await BrandModel.findOne({ slug: brand.slug });
    if (!brandDoc) brandDoc = await BrandModel.create(brand);

    // Category
    let categoryDoc = await CategoryModel.findOne({ slug: category.slug });
    if (!categoryDoc) categoryDoc = await CategoryModel.create(category);

    // Ingredients (create if not exist)
    const ingredientIds = [];
    for (const ing of ingredients) {
      let ingDoc = await IngredientModel.findOne({ name: ing.name });
      if (!ingDoc) ingDoc = await IngredientModel.create(ing);
      ingredientIds.push(ingDoc._id);
    }

    // Final Product creation
    const newProduct = await ProductModel.create({
      ...product,
      brand: brandDoc._id,
      category: categoryDoc._id,
      ingredients: ingredientIds
    });

    res.status(201).json({
      message: 'Product with brand, category, and ingredients added successfully.',
      product: newProduct
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert full product data', details: error.message });
  }
};

// 📥 Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find()
      .populate('brand')
      .populate('category')
      .populate('ingredients');
    return res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// 🔍 Get Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id)
      .populate('brand')
      .populate('category')
      .populate('ingredients');

    if (!product) return res.status(404).json({ error: 'Product not found' });

    return res.json(product);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Invalid product ID' });
  }
};

// ❌ Delete Product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await ProductModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });

    return res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: 'Failed to delete product' });
  }
};
