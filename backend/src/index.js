const express =  require('express');
const app = express();
const cors = require('cors')
require('./database');

app.use(cors());
app.use('/', require('./routes/index'))
app.listen(4000, () => {
    console.log('Server en puerto 4000')
})