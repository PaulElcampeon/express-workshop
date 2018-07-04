var fs = require('fs');
var express = require("express");
var app = express();
app.use(express.static("public"));
var formidable = require('express-formidable');
app.use(formidable());

// fs.readFile(__dirname + '/data/posts.json', function (error, file) {

//     //console.log(file);
//     console.log(file.toString());
//     var parsedFile = JSON.parse(file);
//     console.log(parsedFile[1467390356291])
//     //console.log(parsedFile[0].key)

// });


app.get("/", function (req, res) {
    res.send("Yay Node Girls!");

});

app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});

app.get("/node", function (req, res) {
    res.send("I LOVE NODE JS");
});

app.get("/girls", function (req, res) {
    res.send("I love girls");
});

app.post("/create-post", function (req, res) {
    var pos = req.fields.blogpost;
    console.log(pos);
    res.send(pos);
    // var time = 2132132;
    // console.log("obj");

    // var obj = {[time]: pos}
    // console.log(obj);


    // fs.writeFile(__dirname + '/data/posts.json', obj, function (error) {
    //     // do something
    //     //console.log(req.fields);
        
    // });

    //res.send("Good job")
});

app.get("/get-posts",function (req, res) {
   var getIt;

    fs.readFile(__dirname + '/data/posts.json', function (error, file) {

    var parsedFile = JSON.parse(file);
   
   res.send(parsedFile)

   // getIt = parsedFile[1467390356291]
});

//return getIt;
//res.send(JSON.stringify(getIt))
});



app.listen(3000,()=>{
    console.log("SERVER is listening on port 3000. Ready to accept requests!")
});