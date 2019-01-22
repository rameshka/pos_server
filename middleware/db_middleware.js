const mongoose = require('mongoose');
const connUri = process.env.MONGO_LOCAL_CONN_URL;

const connection = mongoose.connect(connUri, { useCreateIndex: true,useNewUrlParser : true }, (err) => {
    if (err) throw err;
});

module.exports = connection;