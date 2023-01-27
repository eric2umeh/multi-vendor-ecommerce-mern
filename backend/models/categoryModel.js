import mongoose from "mongoose";

//for create Table into DB for User
const CategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true}
    }, 
    {
        timestamps: true //for date
    }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;