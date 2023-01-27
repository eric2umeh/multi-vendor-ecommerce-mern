import express from 'express'
import Category from '../models/categoryModel.js';

const CategoryRouter = express.Router();

//for fetch or get category from db
CategoryRouter.get("/", async(req, res) => {

    const category = await Category.find();
    res.send(category);
});

export default CategoryRouter;