import React, {Component} from "react";
import {Link} from "react-router-dom";
class MobileVerify extends Component{
    state={
        mobileForm:{mobileNo:""},errors:{},selectData:this.props.location.state,
    }

    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        s1.mobileForm[input.name] = input.value;
        this.handleValidate(e);
        this.setState(s1);
        // console.log(hh);
    }
    handleSubmit=()=>{
        let s1 = {...this.state};
        let errors = this.validateAll();
        if(this.isValid(errors)){
            console.log(s1.patientForm);
            // this.postData("/",s1.mobileForm)
            this.props.history.push({pathname:"/confirmAppoint",state:s1.selectData});
        }
        else {
            s1.errors = errors;
        }
        this.setState(s1);
    }
    handleValidate=(e)=>{
        let {currentTarget:input} = e;
        let s1 = {...this.state};
        switch(input.name){
            case "mobileNo":
                s1.errors.mobileNo = this.validateMobileNo(input.value);
                break;
            default:
                break;
        }  
    }
    isValid=(errors)=>{
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr)=>(errors[curr]?acc+1:acc),0);
        return count==0;
    }
    
    validateAll=()=>{
        let {mobileNo} = this.state.mobileForm;
        let errors={};
        errors.mobileNo = this.validateMobileNo(mobileNo);
        return errors;
    }
    validateMobileNo=(mobileNo)=>(!mobileNo?"mobileNo must be entered":isNaN(mobileNo)?
    "Invalid Input":mobileNo.length<10 || mobileNo.length>10?"mobileNo should have minimum 10 Digits":"")
    
    
    render(){
        const {mobileForm,errors} = this.state;
        const {mobileNo} = mobileForm;

        return(
            <div className="" style={{background:"#ebebeb"}}>
                
                    <div className="container">
                    <div className="px-4 py-3">
                        <div className="row bg-primary text-white p-3 w-25 rounded">
                            <div className="col-2 px-0"><img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" className="mt-2" width="100%"/></div>
                            <div className="col-10">
                                <small>12541-2541</small>
                                <h5>Vishal Kumar</h5>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Hospital Name</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Location</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>City</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Area</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Specialization</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Sub-Specialization</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Designation</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>ID</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Name</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Reg No.</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Password</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                            <div className="col-lg-3 col-md-6 col-10 mt-4 jfcdS4 "> 
                                <span>Re enter password</span>
                                <span className="float-right"><i className="fa-solid fa-chevron-right fa-sm"></i></span>
                            </div>
                    </div>
                        <div className="mt-5 mb-3 text-center" >
                            <button className="btn btn-primary btn-sm px-5" onClick={()=>this.handleSubmit()}>Next</button>
                        </div>   
                    </div>
                </div>
                
            </div>
        )
    }

}
export default MobileVerify;
