const mongoose = require('mongoose');

module.exports.connectDb = async() => {
    try {
    await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    console.log('Conectat la baza de date OLX');
    }catch (err) {
        console.log(err);
    }
}
