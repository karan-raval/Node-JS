const express = require("express");
const app = express();

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))



app.listen(3131, () => {
  console.log("server is running at 3131");
});
