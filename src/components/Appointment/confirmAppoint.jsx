import React, {Component} from "react";
import {Link} from "react-router-dom";
class ConfirmAppoint extends Component{
    state={ }

    render(){


        return(
            <div className="container-fluid p-4" style={{background:"rgb(230, 230, 230)",height:"auto"}}>
                <div className="container">
                <div className="row ml-">
                    <div className="col-lg-6 col-12 bg-white rounded "> 
                        <div className="row py-3 px-2">
                            <div className="col-sm-6 col-12 sdAwq2 mr-4 border">
                                <div className="dseFre"> <i class="fa-solid fa-location-dot"></i>  </div>
                                <div className="py-1">
                                    <small style={{fontSize:"12px"}}>Appointment Date</small>
                                    <div style={{color:"#0774a2",fontWeight:"500",fontSize:"14px"}}>September 20, 2023</div>
                                </div>  
                            </div>
                            <div className="col-sm-6 col-12 sdAwq2 border">
                                <div className="dseFre"> <i class="fa-regular fa-clock"></i> </div>
                                <div className="py-1">
                                    <small style={{fontSize:"12px"}}>Appointment Time</small>
                                    <div style={{color:"#0774a2",fontWeight:"500",fontSize:"14px"}}>11:45-12:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="row py-3 ">
                            <div className="col-sm-4 col-12 mb-2 text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJABO838SvPqz39uGQ8dWKV19eSR7OE-BYQ&usqp=CAU" width="140px" style={{borderRadius:"50%"}}/>
                            </div>
                            <div className="col-sm-8  col-12">
                                <div style={{color:"#0774a2",fontWeight:"500"}}>Dr Anuradh Sharma</div>
                                <small>MBBS: MD: DGO OBS & GYN : Trained In Endoscopic Surgery And Robotic</small>
                                <div><small style={{color:"#0774a2",fontWeight:"500"}}>Gunecologist</small></div>
                            </div>
                        </div>
                        <hr className="m-0 p-0"/>
                        <div className="row py-3 ">
                            <div className="col-sm-4 col-12 text-center">
                                {/* <img src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.064197704573!2d87.02662959033738!3d23.242503030696007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af36cbad1eab%3A0x7c09e6af494eeb9!2sApollo%20Hospitals%20Information%20Center!5e0!3m2!1sen!2sin!4v1694714469893!5m2!1sen!2sin" width="140px" style={{borderRadius:"50%"}}/> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.064197704573!2d87.02662959033738!3d23.242503030696007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af36cbad1eab%3A0x7c09e6af494eeb9!2sApollo%20Hospitals%20Information%20Center!5e0!3m2!1sen!2sin!4v1694714469893!5m2!1sen!2sin" width="140px" style={{borderRadius:"50%"}}/>
                            </div>
                            <div className="col-sm-8 col-12 mt-2">
                                <div style={{color:"#0774a2",fontWeight:"500"}}> Apollo Multispecialty Hospitals</div>
                                <small> Apollo Multispecialty Hospitals</small>
                                <div><small style={{color:"#0774a2",fontWeight:"500"}}><i class="fa-solid fa-location-dot mr-2"></i>Get Direction</small></div>
                            </div>
                        </div>
                       
                    </div>

                    
                    <div className="col-lg-6 col-12  mt-4  ">
                        <div className="bg-white p-4 rounded">
                            <div>
                                <span style={{color:"#0774a2",fontWeight:"500",marginRight:"40px"}}>Booking For:</span>
                                <button className="khDse4 text-white" style={{background:"#0774a2"}}>Self</button>
                                <button className="khDse4">Relative</button>
                            
                            </div>
                            <hr className="mt-3 mb-2"/>
                            <small>UHD's Linked to your mobile no :</small>
                            <div>
                                <select className="form-select sdeZa3" >
                                    <option  >Choose</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <div style={{color:"#0774a2",fontWeight:"500"}}>My Details</div>
                                <div className="row" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                    <small className="col-3">First Name:</small>
                                    <small className="col-9" style={{color:"#e86a25"}}>Robin</small>
                                </div>
                                <div className="row" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                    <small className="col-3">Last Name:</small>
                                    <small className="col-7" style={{color:"#e86a25"}}>Sharma</small>
                                </div>
                                <div className="row" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                    <small className="col-3">MobileNo:</small>
                                    <small className="col-7" style={{color:"#e86a25"}}>9865214521</small>
                                </div>
                                <div className="row" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                    <small className="col-3">Email:</small>
                                    <small className="col-7" style={{color:"#e86a25"}}>test@gmail.com</small>
                                </div>
                                <div className="row" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                    <small className="col-3">DOB:</small>
                                    <small className="col-7" style={{color:"#e86a25"}}>05/04/2001</small>
                                </div>
                                <div className="row" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                    <small className="col-3">Gender:</small>
                                    <small className="col-7" style={{color:"#e86a25"}}>Male</small>
                                </div>
                            </div>
                            <div>
                                <h1></h1>
                            </div>
                        </div>
                        <div className="mt-3">
                            <input type="checkbox" />
                            <small className="ml-3">I Agree to the <span className="text-primary">Terms & Conditions</span></small>
                        </div>
                        <div className="text-center mt-3 rounded" style={{background:"#e86a25"}}>
                            <button className="btn text-white btn-sm">Confirm Appointment</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }

}
export default ConfirmAppoint;