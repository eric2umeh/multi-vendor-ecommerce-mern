import express from 'express'
import data from '../data.js';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';


//Seed data into table -> db

const seedRouter = express.Router();

seedRouter.get("/", async(req, res) => {

    await User.deleteMany({});
    const createdUser = await User.insertMany(data.users);

    await Product.deleteMany({});
    const createdProduct = await Product.insertMany(data.products);

    await Category.deleteMany({});
    const createdCategory = await Category.insertMany(data.category);

    res.send({createdUser, createdProduct, createdCategory});

});

export default seedRouter;