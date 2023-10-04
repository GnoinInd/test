import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import  "./style.css";
import Specialization from "./specialization";
import Rank from "./ranks";
import Hospital from "./hospitals";
import Dr from "./drs";
import SignIn from "./signIn";
import PatientDetails from "./patientDetails";
import MobileVerify from "./mobileVerify";
import PaymentDetails from "./paymentDetails";
import ConfirmAppoint from "./confirmAppoint";
import Admin from "./dashboard"

class MainComponent extends Component{
    state={isOpen:false

    }
    componentDidMount(){
        setTimeout(this.togglePopup, 2000);
    }
    togglePopup=()=>{
        let s1={...this.state};
        s1.isOpen=true;
        this.setState(s1);
    }
    handleClose=()=>{
        let s1={...this.state}; 
        setTimeout(this.togglePopup, 300000);
        !s1.isOpen?s1.isOpen=true:s1.isOpen=false;
        this.setState(s1);
    }
   
    render(){
        const {isOpen} = this.state;
        return(

            <div>
                <Switch>

                    <Route path="/admin" component={Admin}/>
                    <Route path="/confirmAppoint" component={ConfirmAppoint}/>
                    <Route path="/payment" component={PaymentDetails}/>
                    <Route path="/mobileverify" component={MobileVerify}/>
                    <Route path="/patientDetails" component={PatientDetails}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/dr" component={Dr}/>
                    <Route path="/hospitals" component={Hospital}/>
                    <Route path="/rank" component={Rank}/>
                    <Route path="/Specialization" component={Specialization}/>
                    <Route path="/home" component={Home}/>
                    <Redirect from="/" to="/home"/>
                </Switch>

                <div>
                    {isOpen &&
                    <div className="popup-box">
                        <div className="box">
                            <span className="close-icon" onClick={this.handleClose}>✕</span>
                            {<SignIn/>}
                        </div>
                    </div>
                    }
                </div>
                
            </div>
        );
    }

}
export default MainComponent;