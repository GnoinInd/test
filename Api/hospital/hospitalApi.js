let express = require("express") ;
let app = express();

let {hospitals,specztions,doctors,patients} = require("./hospitalData");
app.use(express.json ());
app.use( function (req, res, next) {
res.header("Access-Control-Allow-Origin","*");
res.header( "Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD");
res. header( "Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
next();
});
var port = process.env.PORT || 2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));


app.get("/hospitals",function(req,res){
    res.send(hospitals);
});
app.get("/specztions",function(req,res){
    res.send(specztions);
});

app.get("/allhospitals",function(req,res){
    let hospitalsArr = [];
    hospitals.map(h1=>{
        h1.cities.map(c1=>{
            c1.hospitals.map(h1=>{hospitalsArr.push(h1)})
        })
    })
    res.send(hospitalsArr);
});
app.get("/allhospitals/:id",function(req,res){
    let id = req.params.id;
    let hospitalsArr = [];
    hospitals.map(h1=>{
        h1.cities.map(c1=>{
            c1.hospitals.map(h1=>{hospitalsArr.push(h1)})
        })
    })
    let hospital = hospitalsArr.find(h1=>h1.id==id);
    res.send(hospital);
});

app.get("/getDoctors",function(req,res){
    res.send(doctors);
});


app.post("/addstate",function(req,res){
    let {stateName,cities} = req.body;
    let findState = hospitals.find(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    if(findState){
        res.send(`${stateName} is already exists`);
    }else{
        let city=[];
        for(let i=0;i<cities.length;i++){
            city.push({name:cities[i],hospitals:[]});
        }
        hospitals.push({state:stateName,cities:city});
        res.send("added successfully");
    }
})


app.post("/addcity/:stateName",function(req,res){
    let stateName = req.params.stateName;
    let {city} = req.body;
    let findState = hospitals.find(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    if(findState){
        findState.cities.push({name:city,hospitals:[]});
        res.send("added successfully");
    }else{
        res.status(404).send("State Name is Not Found");
    }
})
app.post("/addhospital/:stateName/:cityName",function(req,res){
    let stateName = req.params.stateName;
    let cityName = req.params.cityName;
    let body = req.body;
    let findState = hospitals.find(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    if(findState){
        let city = findState.cities.find(c1=>c1.name.toLowerCase()===cityName.toLowerCase());
        if(city){
            city.hospitals.push(body);
            res.send("Upload successfully!");
        }else{
            res.status(404).send("City Name is Not Found"); 
        }
    }else{
        res.status(404).send("State Name is Not Found");
    }

});

app.delete("/deletestate/:stateName",function(req,res){
    let stateName = req.params.stateName;
    let index = hospitals.findIndex(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    if(index>=0){
       hospitals.splice(index,1);
       res.send("Delete successfully!");
    }else{
        res.status(404).send("State Name is Not Found");
    }
})

app.delete("/deletecity/:stateName/:cityName",function(req,res){
    let stateName = req.params.stateName;
    let cityName = req.params.cityName;
    let findState = hospitals.find(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    if(findState){
        let index = findState.cities.findIndex(c1=>c1.name.toLowerCase()===cityName.toLowerCase());
        if(index>=0){
            findState.cities.splice(index,1);
            res.send("Delete successfully!");
        }else{
            res.status(404).send("City Name is Not Found"); 
        }
    }else{
        res.status(404).send("State Name is Not Found");
    }
});

app.delete("/deletehospital/:stateName/:cityName/:hospitalName",function(req,res){
    let stateName = req.params.stateName;
    let cityName = req.params.cityName;
    let hospitalName = req.params.hospitalName;
    let findState = hospitals.find(s1=>s1.statename.toLowerCase()==stateName.toLowerCase());
    if(findState){
        let cities = findState.cities.find(c1=>c1.name.toLowerCase()===cityName.toLowerCase());
        if(cities){
            let index = cities.hospitals.findIndex(h1=>h1.name.toLowerCase() === hospitalName.toLowerCase());
            console.log(index);
            if(index>=0){
                cities.hospitals.splice(index,1);
                res.send("Delete successfully!");
            }else{
                res.status(404).send("Hospital Name is Not Found"); 
            }
        }else{
            res.status(404).send("City Name is Not Found"); 
        }
    }else{
        res.status(404).send("State Name is Not Found");
    }
});

app.get("/getpatient",function(req,res){
    res.send(patients);
});


app.post("/addpatient",function(req,res){
    let body = req.body;
    let mxId = patients.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0);
    let newPatient = {id:mxId+1, ...body};
    console.log(newPatient);
    patients.push(newPatient);
    
})