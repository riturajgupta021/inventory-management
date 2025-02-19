const Product = require('../models/product.model');


const createProduct = async (req, res) => {
    try {
        const { name, discription, price } = req.body
        console.log(name, discription, price)
        if (!name || !discription || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const product = await Product.create({ name, discription, price });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const { name, discription, price } = req.body;
        if (!name || !discription || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, discription, price }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => { 
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const result = await Product.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Product deleted successfully", result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };