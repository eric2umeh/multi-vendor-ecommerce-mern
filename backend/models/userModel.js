import mongoose from "mongoose";

//for create Table into DB for User
const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true}, //only one email
        password: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        image: {type: String, required: true},
        isAdmin: {type: Boolean, default: false, required: true}
    }, 
    {
        timestamps: true //for date
    }
);

const User = mongoose.model("User", UserSchema);
export default User;