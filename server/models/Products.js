const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3, // Minimum name length
        maxlength: 100 // Maximum name length
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String, // Subcategory added
        default: '' // Default value as empty string in case not provided
    },
    novelGenre: {
        type: String, // Novel genre added (only applicable when subcategory is 'Novels')
        default: '' // Default value in case not applicable
    },
    description: {
        type: String,
        required: true,
        minlength: 10, // Ensuring enough detail is provided
        maxlength: 1000 // Limiting excessively long descriptions
    },
    price: {
        type: Number,
        required: true,
        min: 0.01 // Price should be greater than 0
    },
    contact: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Simple validation for contact (phone number)
                return /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(v);
            },
            message: props => `${props.value} is not a valid contact number!`
        }
    },
    condition: {
        type: String,
        enum: ['new', 'used'],
        required: true
    },
    usageDuration: {
        type: String,
        default: '',
        validate: {
            validator: function(v) {
                // Only validate if the condition is 'used'
                return this.condition === 'new' || (this.condition === 'used' && v.length > 0);
            },
            message: 'Usage duration is required for used products.'
        }
    },
    image: {
        type: String, // File path or URL
        required: true
    },
    county: {
        type: String,
        required: true
    },
    constituency: {
        type: String,
        required: true
    },
    additionalLocationDetails: {
        type: String,
        default: ''
    }
}, {
    timestamps: true // Automatically manage `createdAt` and `updatedAt`
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
