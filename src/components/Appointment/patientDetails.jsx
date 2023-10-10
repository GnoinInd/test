import React, {Component} from "react";
import {Link} from "react-router-dom";
import http from "../../services/httpService";
class PatientDetails extends Component{
    state={
        patientForm:{firstName:"",lastName:"",email:"",mobileNo:"",DOB:"",gender:""},
        errors:{},selectData:this.props.location.state,
    }

    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        s1.patientForm[input.name] = input.value;
        this.handleValidate(e);
        this.setState(s1);
        // console.log(hh);
    }
    postData(url,obj){
        let response = http.post(url,obj);
    }

    handleSubmit=()=>{
        let s1 = {...this.state};
        let errors = this.validateAll();
        let obj = {...s1.selectData,...s1.patientForm};
        if(this.isValid(errors)){
            console.log(s1.patientForm);
            // this.postData("/addpatient",obj);
            this.props.history.push({pathname:"/mobileverify",state:obj});
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
            case "firstName":
                s1.errors.firstName = this.validateFName(input.value);
                break;
            case "lastName":
                s1.errors.lastName = this.validateLName(input.value);
                break;
            case "email":
                s1.errors.email = this.validateEmail(input.value);
                break;
            case "mobileNo":
                s1.errors.mobileNo = this.validateMobileNo(input.value);
                break;
            case "DOB":
                s1.errors.DOB = this.validateDOB(input.value);
                break;
            case "gender":
                s1.errors.gender = this.validateGender(input.value);
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
    let {firstName,lastName,email,mobileNo,DOB,gender} = this.state.patientForm;
    let errors={};
    errors.firstName = this.validateFName(firstName);
    errors.lastName = this.validateLName(lastName);
    errors.email = this.validateEmail(email);
    errors.mobileNo = this.validateMobileNo(mobileNo);
    errors.DOB = this.validateDOB(DOB);
    errors.gender = this.validateGender(gender);
    return errors;
    }

    validateFName=(firstName)=>(!firstName?"firstName must be entered":"")
    validateLName=(lastName)=>(!lastName?"lastName must be entered":"")
    validateEmail=(email)=>{
        let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !email?"email must be entered":(email.match(valid))?"":"Invalid email address!";
    }
    validateMobileNo=(mobileNo)=>(!mobileNo?"mobileNo must be entered":isNaN(mobileNo)?"Invalid Input":mobileNo.length<10 || mobileNo.length>10?"mobileNo should have minimum 10 Digits":"")
    validateDOB=(DOB)=>(!DOB?"DOB must be entered":"")
    validateGender=(gender)=>(!gender?"choose the gender":"")

    render(){
        const {patientForm,errors,selectData} = this.state;
        const {firstName,lastName,email,mobileNo,DOB,gender} = patientForm;
        // console.log(selectData);
        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb"}}>
                <div className="CGrew2">
                    <div className="px-4 py-3">
                    <h5 style={{color:"#e86a25"}}>Patient Details</h5>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className={"form-control "+(errors.firstName?"border-danger":"")} name="firstName" value={firstName} placeholder="First Name" onChange={this.handleChange} onBlur={this.handleValidate}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className={"form-control "+(errors.lastName?"border-danger":"")} name="lastName" value={lastName} placeholder="Last Name" onChange={this.handleChange} onBlur={this.handleValidate}/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className={"form-control "+(errors.email?"border-danger":"")} name="email" value={email} placeholder="Enter email" onChange={this.handleChange} onBlur={this.handleValidate}/>
                    </div>
                    <div className="form-group">
                        <label>Mobile No:</label>
                        <input type="text" className={"form-control "+(errors.mobileNo?"border-danger":"")} name="mobileNo" value={mobileNo} placeholder="10 digit phone Number" onChange={this.handleChange} onBlur={this.handleValidate}/>
                    </div>
                    <div className="form-group">
                        <label>Date of birth(Age):*</label>
                        <input type="date" className={"form-control "+(errors.DOB?"border-danger":"")} name="DOB" value={DOB} placeholder="Enter email" onChange={this.handleChange} onBlur={this.handleValidate}/>
                    </div>
                    <div className="form-group">
                        <label>Gender:*</label>
                        <div className="form-check form-check-inline ml-5">
                            <input className={"form-check-input mt-1 "+(errors.gender?"border-danger":"")} type="radio" name="gender" value="Male" onChange={this.handleChange} onBlur={this.handleValidate}/>
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className={"form-check-input mt-1 "+(errors.gender?"border-danger":"")} type="radio" name="gender" value="Female" onChange={this.handleChange} onBlur={this.handleValidate}/>
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="text-center mt-3 rounded" style={{background:"#e86a25",cursor:"pointer"}}  onClick={()=>this.handleSubmit()}>
                            <button className="Cdsew3d">Proceed</button>
                        </div>                        
                    </div>
                    </div>
                    <div className="row mx-0 mt- pb-3" style={{background:"#dadada"}}>
                        <div className="my-2">Download our <span className="text-primary">Ask</span> <span className="text-warning">Apollo</span> App</div>
                        <div className="col-6"><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg" width="100%"/></div>
                        <div className="col-6 text-end"><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg" width="90%"/></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default PatientDetails