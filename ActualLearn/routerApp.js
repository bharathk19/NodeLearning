let express = require('express');
const file = require('fs');
let app = express();
let port = 6500;

let categoryRouter = express.Router();
let productRouter = express.Router();

app.get('/', (req, res) => {
  res.send('From Default route:');
});

// Issue of router getting resolved using Router method in the express.
categoryRouter.get('/', (req, res) => {
  file.readFile('category.json','utf-8' ,(err, data) => {
    if (err) throw err;
    res.send(data)});
});

categoryRouter.get('/details', (req, res) => {
  res.send('From category details route:');
});


productRouter.get('/', (req, res) => {
  file.readFile('products.json','utf-8',(err, data) =>{
    if (err) throw err;
    res.send(data);
});
});
productRouter.get('/details', (req, res) => {
  res.send('From product Details route:');
});


app.use('/category', categoryRouter);
app.use('/products', productRouter);

app.listen(port, function(err)
{
  if (err) throw err;

  console.log(`Example app listening at http://localhost:${port}`);
} );
