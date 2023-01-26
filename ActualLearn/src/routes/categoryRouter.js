let express = require('express');
let categoryRouter = express.Router();
const file = require('fs');
const path = require('path');


function router(menu){

  categoryRouter.route('/')
  .get((req, res) => {
    
   
    let path1 = path.join(__dirname,'../../');
     
    file.readFile(path1+'category.json','utf-8' ,(err, data) => {
      if (err) throw err;
      console.log(data.length);
      console.log(JSON.parse(data).length);
      //res.send(data)});
      
      res.render('category',{title:'Category Page',data1:JSON.parse(data),menu});
  });
});
        
 categoryRouter.route('/details')
  .get((req, res) => {
      res.send("Category Details...");
  });

  return categoryRouter;

}



  module.exports = router;