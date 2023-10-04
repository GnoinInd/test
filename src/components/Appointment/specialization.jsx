import React, {Component} from "react";
import {Link} from "react-router-dom";
class Specialization extends Component{
    state={
        specztions:["Anatomical pathology","Anesthesiology","Cardiology","Cardiovascular & Thoracic Surgery","Clinical Immunology/Allergy","Critical Care Medicine","Dermatology","Diagnostic radiology","Gastroenterology","general surgeon","General pathology","Geriatric Medicine","Hematology","Medical Biochemistry","Medical Genetics","Medical Microbiology and Infectious Diseases","Medical oncology","Nephrology","Neurology","Neurosurgery","Ophthalmology","Orthopedic surgery","Otolaryngology ","Pediatrics"],
        pageNo:1,findSpeztion:{speci:"",search:""},
    }

    
    handlePage=(page)=>{
        let s1 = {...this.state};
        s1.pageNo = page;
        this.setState(s1);
    }
    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        s1.findSpeztion[input.name] = input.value;
        this.setState(s1);
        // console.log(hh);
    }
    handleSrch=()=>{
        let s1 = {...this.state};
        s1.findSpeztion = s1.search?s1.specztions.filter(sp=> sp.indexOf(s1.search)>=0?true:false):s1.specztions;
        this.setState(s1);
    }


    render(){
        const {specztions,findSpeztion,arrSpeci,pageNo} = this.state;
        const {speci,search} = findSpeztion;
        let size = 6;
        let valueArr = speci?specztions.filter(s1=>s1===speci):specztions;
        let startIndex = (pageNo-1)*size;
        let endIndex = specztions.length>(startIndex +size-1)? (startIndex + size-1):specztions.length-1;
        let specztions1 = valueArr.filter((s1,index)=>(index>=startIndex && index<=endIndex));
        // console.log(arrSpeci1);
        let pageArr=[];
        let pageLen = Math.ceil(specztions.length/size);
        for(let i=1;i<=pageLen;i++){pageArr.push(i)}
        // console.log(search);



        return(

            <div className="container-fluid py-3" style={{background:"#f1f3f6"}}>
               
                <div className="container vfErx4">
                    <div className="mr-4" style={{width:"220px"}}>
                        <select className="form-select cdsAw2" name="speci" value={speci} onChange={this.handleChange}>
                            <option value="" disabled >Choose Specialization</option>
                            {specztions.map((s1,index)=>(
                                <option key={index}>{s1}</option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex kcdSw">
                        <div className="njCds4" >
                            <input className="form-control sdWqe3" type="text" name="search"  placeholder="Search..." autoComplete="off" onChange={this.handleChange} />  
                        </div>
                        <div className="">
                            <button className="cgDSe4" onClick={()=>this.handleSrch()}><i className="fa-solid fa-magnifying-glass" ></i></button>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="row">
                    {specztions1.map((sp,index)=>(
                        <div className="col-lg-4 col-sm-6 col-12 mt-4 " key={index}>
                            <div className="fdeAw3">
                                <img src="https://images.ctfassets.net/pxcfulgsd9e2/articleImage102459/49e52f299ff0badb87c859a6d0ce57bc/How-to-prepare-for-a-primary-care-visit-HN1433-iStock-843331126-Sized.png?f=top&fit=fill&fm=png&h=786&q=85&w=1396" width="100%" />
                                <div className="mt-4"><Link className="laSew3" to="/hospitals">{sp}</Link></div>
                            </div>
                        </div>
                    ))}
                    </div>
                    <div className="my-4 text-center">
                    {valueArr.length>size? 
                    <React.Fragment>
                    {pageArr.map((p1,index)=>(
                        <span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1)}>{p1}</span>
                    ))}
                    </React.Fragment>
                    :""}
                        
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Specialization;
