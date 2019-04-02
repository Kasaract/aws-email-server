const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    date: Date
});

module.exports = mongoose.model('Subscriber', subscriberSchema);