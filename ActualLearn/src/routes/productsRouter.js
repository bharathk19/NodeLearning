let express = require('express');
let productRouter = express.Router();
const file = require('fs');
const path = require('path');



function router(menu){

  productRouter.route('/')
.get((req, res) => {
  let path1 = path.join(__dirname,'../../');
  file.readFile(path1+'/products.json','utf-8',(err, data) =>{
    if (err) throw err;
    console.log("Products json length: "+JSON.parse(data).length);
    res.render('products',{title:'Products Page',data:JSON.parse(data),menu})
  })
});

productRouter.route('/details')
.get((req, res) => {

  res.send("Products Details.....");

});

return productRouter;


}



module.exports = router;