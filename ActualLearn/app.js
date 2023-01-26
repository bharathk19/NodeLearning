let express = require('express');
let app = express();
let port = 6500;

let menu =[
  {link:'/',name:'Home'},
  {link:'/category',name:'Category'},
  {link:'/products',name:'Products'}
];


let categoryRouter = require('./src/routes/categoryRouter')(menu);
let productRouter = require('./src/routes/productsRouter')(menu);



//middleware (supporting lib)
// static file path
app.use(express.static(__dirname+'/public'))
console.log("main app JS: " + __dirname);
//html file path
app.set('views',__dirname+'/src/views');
//view engine name
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  //res.send('From Default route:');
  res.render('index',{title:'Home',pageNo:1,menu});
});


app.use('/category', categoryRouter);
app.use('/products', productRouter);

app.listen(port, function(err)
{
  if (err) throw err;

  console.log(`Example app listening at http://localhost:${port}`);
} );
