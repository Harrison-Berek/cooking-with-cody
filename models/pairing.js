const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const pairingSchema = new Schema({
    style: {
        type: String,
        enum: ['Beer', 'Wine', 'Cocktail', 'Non-Alcoholic']
    },
    name: String,
    results: String,
    recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Pairing', pairingSchema);