let express = require('express');
let app = express();
let port = 6500;


app.get('/', (req, res) => {
  res.send('From Default route:');
});

app.get('/category', (req, res) => {
  res.send('From category route:');
});
app.get('/details', (req, res) => {
  res.send('From category details route:');
});


app.get('/product', (req, res) => {
  res.send('From Product route:');
});
app.get('/details', (req, res) => {
  res.send('From product Details route:');
});



app.listen(port, function(err)
{
  if (err) throw err;

  console.log(`Example app listening at http://localhost:${port}`);
} );
