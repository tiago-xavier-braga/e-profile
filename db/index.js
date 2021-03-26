const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/e-profile',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;