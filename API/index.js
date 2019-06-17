const FileSys= require('csvtojson');
const express=require('express');
const app=express();
var data=[];

FileSys().fromFile('./data.csv').then(response=>{

data=response;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/api/v1/data', (req, res) => {
    res.status(200).send({
      data
    })
  });

})

app.listen(4000,()=>{
    console.log("Listening to port 4000");
})