const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
    {
        "title": { type: String, required: true, trim: true },
        "description": { type: String, required: true, trim: true },
        "discountedPrice": { type: String, required: true },
        "originalPrice": { type: String, required: true },
        "productImg": { type: String, required: true }
    }
)

// const Product = mongoose.model("Product", productSchema);
const Product = mongoose.model("Product", productSchema);
module.exports = Product