const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const exists = await Category.findOne({ name });
  if (exists) return res.status(400).json({ message: 'Category already exists' });
  const category = await Category.create({ name });
  res.status(201).json(category);
};
