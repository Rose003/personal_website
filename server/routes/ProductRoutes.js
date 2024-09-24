// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Product = require('../models/Products');

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

// Check file type
const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const isValid = filetypes.test(path.extname(file.originalname).toLowerCase()) && filetypes.test(file.mimetype);
    
    if (isValid) {
        cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
};

// Enable CORS for specific origin (if needed)
router.use(cors());

// Use the upload middleware in your product route
router.post('/', upload.single('image'), async (req, res) => {
    const { name, category, subcategory, novelGenre, description, price, contact, condition, usageDuration, county, constituency, additionalLocationDetails } = req.body;

    // Validate required fields
    if (!name || !category || !description || !price || !contact || !condition || !county || !constituency) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    try {
        const newProduct = new Product({
            name,
            category,
            subcategory, // Include subcategory
            novelGenre,  // Include novel genre
            description,
            price,
            contact,
            condition,
            usageDuration,
            image: req.file ? req.file.path : null,
            county,
            constituency,
            additionalLocationDetails
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product listed successfully', product: newProduct });
    } catch (error) {
        res.status(400).json({ message: 'Error listing product', error: error.message });
    }
});

// GET route to fetch products by category
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const query = category ? { category } : {};
        const products = await Product.find(query);
        res.status(200).json({ products });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching products', error: error.message });
    }
});


// Endpoint to get product details by ID
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }
});

module.exports = router;
