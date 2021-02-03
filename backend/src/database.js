const mongoose = require('mongoose');

mongoose.connect('mongodb://Hola1099:Hola1099@cluster0-shard-00-00.19vyf.mongodb.net:27017,cluster0-shard-00-01.19vyf.mongodb.net:27017,cluster0-shard-00-02.19vyf.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-tnd7cz-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(db => console.log('Db is conect'))
.catch(err => console.log(err));