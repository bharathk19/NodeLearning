let express = require('express');
let app = express();
let port = 6500;

let categoryRouter = express.Router();
let productRouter = express.Router();

app.get('/', (req, res) => {
  res.send('From Default route:');
});

// Issue of router getting resolved using Router method in the express.
categoryRouter.get('/', (req, res) => {
  res.send('From category route:');
});

categoryRouter.get('/details', (req, res) => {
  res.send('From category details route:');
});


productRouter.get('/', (req, res) => {
  res.send('From Product route:');
});
productRouter.get('/details', (req, res) => {
  res.send('From product Details route:');
});


app.use('/category', categoryRouter);
app.use('/product', productRouter);

app.listen(port, function(err)
{
  if (err) throw err;

  console.log(`Example app listening at http://localhost:${port}`);
} );
