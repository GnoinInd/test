import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import  "./style.css";
import Specialization from "./specialization";
import Rank from "./ranks";
import Hospital from "./hospitals";
import Dr from "./dr";
import SignIn from "./signIn";
import PatientDetails from "./patientDetails";
import MobileVerify from "./mobileVerify";
import PaymentDetails from "./paymentDetails";

class MainComponent extends Component{
    state={

    }

    render(){
        return(

            <div>
                <Switch>


                    <Route path="/payment" component={PaymentDetails}/>
                    <Route path="/mobileverify" component={MobileVerify}/>
                    <Route path="/patientDetails" component={PatientDetails}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/dr" component={Dr}/>
                    <Route path="/hospitals" component={Hospital}/>
                    <Route path="/chooseRank" component={Rank}/>
                    <Route path="/Specialization" component={Specialization}/>
                    <Route path="/home" component={Home}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
                
            </div>
        );
    }

}
export default MainComponent;