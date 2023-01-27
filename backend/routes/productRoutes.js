import express from 'express'
import Product from '../models/productModel.js';

const ProductRouter = express.Router();

//for fetch or get products from db
ProductRouter.get("/", async(req, res) => {

    const products = await Product.find();
    res.send(products);
});

//get product by slug
ProductRouter.get('/slug/:slug', async (req, res) => {
    const product = await Product.findOne({slug:req.params.slug});
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product Not Found'});
    }
    
});

//get product by sellerId
ProductRouter.get('/seller/:id', async (req, res) => {
    const product = await Product.find({sellerId:req.params.id});
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'No Product of the this Seller'});
    }
    
});

//create product
ProductRouter.post('/add', async(req, res) => { 

    const newProduct = new Product(req.body);

    try {

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch(error) {
        console.log("Error!");
    }

});


//for update product
ProductRouter.put("/update", async(req, res) => {
    const product = await Product.findById(req.body._id);
    //if product exists
    if(product) {
        product.name = req.body.name || product.name;
        product.slug = req.body.slug || product.slug;
        product.category = req.body.category || product.category;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.image = req.body.image || product.image;
        product.sellerId = req.body.sellerId || product.sellerId;
        product.seller = req.body.seller || product.seller;
        product.sellerImage = req.body.sellerImage || product.sellerImage;

        const updateProduct = await product.save();
        res.send({
            _id: updateProduct._id,
            name: updateProduct.name,
            slug: updateProduct.slug,
            category: updateProduct.category,
            description: updateProduct.description,
            price: updateProduct.price,
            image: updateProduct.image,
            sellerId: updateProduct.sellerId,
            seller: updateProduct.seller,
            sellerImage: updateProduct.sellerImage,
        });
    } else {

        res.status(401).send({message: "Product not Found!"});

    }
});

ProductRouter.delete("/delete/:id", async(req, res) => {

    try{

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted!");


    } catch(error) {
        console.log("Can't be deleted!");
    }

});




export default ProductRouter;