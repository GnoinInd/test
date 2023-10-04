let express = require("express");
let app = express();
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin. X-Requested-With,Content-Type, Access");
    next();
});


const port = 2410;
app.listen(port,()=> console.log("Listening on part",port));

const MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;
const url = 'mongodb://localhost:27017';
const dbName = "hospitals";
const client = new MongoClient(url);
client.connect(function(err,client){
    console.log("Successfully connected to MangoDB");
});


app.get("/hospitals",async function(req,res){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('states');
    let collection2 = db.collection('cities');
   let states = await collection.aggregate([ {$lookup:{from: "cities",localField: '_id', foreignField: "stateid", as: "cities" }}]).toArray();
    let hospetal = await collection2.aggregate([{$lookup:{from: "hospitals",localField: '_id', foreignField: "cityid", as: "hospitals" }}]).toArray();
    let hospetalArr = [];
    states.map(s1=>{
        let city=[];
        s1.cities.map(c1=>{
            let host = hospetal.find(h1=>h1.name===c1.name).hospitals;
            city.push({name:c1.name,hospitals:host});
        });
        hospetalArr.push({statename:s1.statename,cities:city});
    })
    res.send(hospetalArr)

});

app.post("/addstate",async function(req,res){
    let {stateName,cities} = req.body;
    
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('states');
    let states = await collection.find({}).toArray();
    let findState = states.find(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    // console.log(response);
    if(findState){
        res.send(`${stateName} is already exists`);
    }else{
        let response = await collection.insertOne({statename:stateName});
        let city=[];
        if(response.insertedId){
            for(let i=0;i<cities.length;i++){
                city.push({stateid:response.insertedId,name:cities[i]});
            }
            let response2 = await collection.insertOne(city);
            console.log(response2);
        }
        console.log(response.insertedId);
        res.send("added successfully");
    }
    
})




