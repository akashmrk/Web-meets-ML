var bodyParser =require("body-parser"),
methodOverride=require("method-override"),
express=require("express"),
expressSanitizer = require("express-sanitizer"),
app=express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

app.get("/", function(req,res){
    res.render("titanic.ejs"); 
});



app.post("/", function(req,res){
     
});

//Tells the express app to listen to the particular port 
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server is running");
});

