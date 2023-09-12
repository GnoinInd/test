import React, {Component} from "react";
import {Link} from "react-router-dom";
class Specialization extends Component{
    state={
        arrSpeci:[
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396",
            "https://st2.depositphotos.com/3051589/46575/i/450/depositphotos_465750336-stock-photo-doctor-appointment-schedule-checkup-calendar.jpg",
            "https://st2.depositphotos.com/3051589/46575/i/450/depositphotos_465750336-stock-photo-doctor-appointment-schedule-checkup-calendar.jpg",
            "https://st2.depositphotos.com/3051589/46575/i/450/depositphotos_465750336-stock-photo-doctor-appointment-schedule-checkup-calendar.jpg",
        ],pageNo:1,
    }
    handlePage=(page)=>{
        let s1 = {...this.state};
        s1.pageNo = page;
        this.setState(s1);
    }


    render(){
        const {arrSpeci,pageNo} = this.state;
        let size = 6;
        let startIndex = (pageNo-1)*size;
        let endIndex = arrSpeci.length>(startIndex +size-1)? (startIndex + size-1):arrSpeci.length-1;
        let arrSpeci1 = arrSpeci.filter((s1,index)=>(index>=startIndex && index<=endIndex));
        // console.log(arrSpeci1);
        let pageArr=[];
        let pageLen = Math.ceil(arrSpeci.length/size);
        for(let i=1;i<=pageLen;i++){pageArr.push(i)}
        console.log(pageArr);



        return(

            <div className="container-fluid py-3" style={{background:"#f1f3f6"}}>
               
                <div className="container d-flex">
                    <div className="mr-4" style={{width:"250px"}}>
                        <select className="form-select cdsAw2" id="inlineFormCustomSelect">
                            <option  >Choose Specialization</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="d-flex">
                        <div style={{width:"300px"}}>
                            <input className="form-control cdsAw2" type="text" name="q"  placeholder="Search..." autoComplete="off" />  
                        </div>
                        <div className="">
                            <button className="cgDSe4"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="row">
                    {arrSpeci1.map((sp,index)=>(
                        <div className="col-4 mt-4 " key={index}>
                            <div className="fdeAw3">
                                <img src={sp} width="100%" height={225}/>
                                <button className="laSew3">Specialization</button>
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
export default Specialization