const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const app = express();

app.set('port', 3000);


// Middelewares
app.use(morgan('dev'));

multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null,)
    }
})

app.use(multer())


app.listen(app.get('port'),()=> { 
    console.log('Serve on port', app.get('port'));
    
})