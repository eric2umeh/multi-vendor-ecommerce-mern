import mongoose from 'mongoose'

//Create table for Order
const OrderSchema = new mongoose.Schema({
    
    orderItems: [
        {
            slug: { type: String, required: true },
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true,
            },
            seller: { type: String, required: true },
            sellerId: { type: String, required: true },
            sellerImage: { type: String, required: true }
        },
    ],

    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    sellerId: [{type: String, required: true}],

    itemsPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },

}, {
    timestamps: true
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;