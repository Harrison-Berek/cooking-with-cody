const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: Sting,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }, 
    pic: {
        type: String,
        default: '//images.unsplash.com/photo-1466637574441-749b8f19452f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'
    },
    diet: {
        type: String,
        enum: ['Vegan', 'Gluten Free', 'Vegetarian', 'Pescatarian']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);