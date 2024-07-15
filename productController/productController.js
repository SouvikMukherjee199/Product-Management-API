const Product = require("../productmodel/productmodel");

exports.createProduct = async (req,res) => {
    try {
        
const { title, description, originalPrice, discountedPrice, productImg } = req.body;

let newProduct = new Product(
    {
        title,
        description,
        discountedPrice,
        originalPrice,
        productImg
    }
);

newProduct = await newProduct.save();
res.status(201).json(newProduct);

    } catch (error) {
    res.status(500).json({error:error.message});        
    }

}


// Fetching All Products
exports.products = async (req,res) => {
 try{
    const products = await Product.find({});
    res.json(products);
}   
 catch (e){
    res.status(500).json({ error: e.message});
 }
}

//Fetching any particular product
exports.product = async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
}

//Updating Products
exports.updatedProduct = async (req,res) => {
    try {
        const {title, description, discountedPrice, originalPrice, productImg } = req.body;
        let updatedProduct = new Product (
            {
                title,
                description,
                discountedPrice,
                originalPrice,
                productImg,
                _id : req.params.id,
            }
        );

        updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProduct);
     
        res.json({message: `Product with id ${req.params.id} has updated successfully`});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Deleting Products
exports.deleteProduct = async (req, res) => {
    try{
        const deletedProdcut = await Product.findByIdAndDelete(req.params.id);
        res.json({message : `Product with id ${req.params.id} has deleted sucessfully`});
    }
    catch (error) {
    res.status(500).json({error: error.message});
    }
}



