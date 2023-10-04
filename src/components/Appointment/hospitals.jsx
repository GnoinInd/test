import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Country, State, City }  from 'country-state-city';
import http from "../../services/httpService";
class Hospital extends Component{
    state={
       imageArr:[
        "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0IBQ5CsQz5p_dkbjGn7MI89g4rj108MhKa0dyclWnD4EbxGn2MdHH12nE4mEYKX_wOk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPGjIOs6ETTJGux95IYrNzgowKVmH7vCcwaA4B5tg-VjSioGFiMqDqZmp4J5JPkN1N70&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFpms2kQ5ocZaw8N1TpZEf7jx3oeCNwM0OQ&usqp=CAU",
        "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0IBQ5CsQz5p_dkbjGn7MI89g4rj108MhKa0dyclWnD4EbxGn2MdHH12nE4mEYKX_wOk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPGjIOs6ETTJGux95IYrNzgowKVmH7vCcwaA4B5tg-VjSioGFiMqDqZmp4J5JPkN1N70&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFpms2kQ5ocZaw8N1TpZEf7jx3oeCNwM0OQ&usqp=CAU",

    ],
       hospitals:[],data:{},prevData:[], pageNo:1,filterHospital:{state:"",city:""},no:0,
       

    }

    async componentDidMount(){
        let response =await http.get("/hospitals");
        const {data} = response;
        this.setState({hospitals:data});
        // console.log(data);
    }
    handleChange=(e)=>{
        const {"currentTarget" : input} = e;
        let s1 = {...this.state};
        // const {state,city} = s1.filterHospital;
        s1.filterHospital[input.name] = input.value;
        s1.filterHospital.city=input.name=="state"?"":s1.filterHospital.city;
       if(input.name=="city"){
        let city = s1.hospitals.find(h1=>h1.statename==s1.filterHospital.state).cities;
        s1.prevData = city.find(h1=>h1.name==s1.filterHospital.city).hospitals;
       }
  
        this.setState(s1);
    }
    handlePage=(page)=>{
        let s1 = {...this.state};
        s1.pageNo = page;
        this.setState(s1);
    }

    getno=()=>{
        let s1 = {...this.state};
        s1.no = s1.no+1;
        // this.setState(s1);
        return s1.no;
        
    }
    render(){
        const {hospitals,prevData,filterHospital,imageArr,pageNo,no} = this.state;
        const {state,city} = filterHospital;

        let cities = state?hospitals.find(h1=>h1.statename==state).cities:[];
        let hospital = state && city?cities.find(h1=>h1.name==city).hospitals:prevData;

        let size = 8;
        let startIndex = (pageNo-1)*size;
        let endIndex = hospital.length>(startIndex +size-1)? (startIndex + size-1):hospital.length-1;
        let hospital1 = hospital.filter((s1,index)=>(index>=startIndex && index<=endIndex));
        let pageArr=[];
        let pageLen = Math.ceil(hospital.length/size);
        for(let i=1;i<=pageLen;i++){pageArr.push(i)}
        let states = State.getStatesOfCountry("IN");

        // let stateCode = state?states.find(s1=>s1.name==state).isoCode:"";
        // let cities = state?City.getCitiesOfState("IN", stateCode):[];
        
        // let cities1 = City.getCitiesOfState("IN", "WB"); //  TG TR UP UT WB 
        // console.log(states);
        // console.log(cities1);



        
        return(
            <div className="container-fluid py-3 h" style={{background:"#f1f3f6"}}>

            
                <div className="container jhYgt5">
                    <div className="d-flex mr-4" style={{width:"280px"}}>
                        <select className="form-select cdsAw2" name="state" value={state} onChange={this.handleChange}>
                            <option disabled value="" >Choose Location</option>
                            {hospitals.map((s1,index)=>(
                                <option key={index} style={{textTransform:"capitalize"}}>{s1.statename}</option>
                            ))}
                        </select>
                        <label className="mx-2 mt-1 fw-bold">Location</label>
                    </div>
                    <div className="d-flex kcdSw" style={{width:"280px"}}>
                        <select className="form-select cdsAw2" name="city" value={city} onChange={this.handleChange}>
                            <option disabled value="" >Choose city</option>
                            {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))}
                            
                        </select>
                        <label className="mx-2 mt-1 fw-bold">Area</label>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="row">
                            {hospital1.map((m1,index)=>(
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={index}>
                                <div className="fdekiu">
                                    <img  src={m1.img} width="100%" height="200px" />
                                    <div className="mt-2 fw-bold lkSwEd">{m1.name}</div>
                                    <div className="sdWeAa"><i className="fa-solid fa-location-dot mr-1"></i>{m1.location}</div>
                                </div>
                            </div>
                            ))}
                    </div>
                    <div className="my-4 text-center">
                    {pageArr.map((p1,index)=>(
                        <span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1)}>{p1}</span>
                    ))}
                    </div>
                </div>
                
            </div>
        )
    }

}
export default Hospital;


