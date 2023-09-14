import React, {Component} from "react";
import {Link} from "react-router-dom";
class PatientDetails extends Component{
    state={

    }


    render(){


        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb"}}>
                <div className="CGrew2">
                    <div className="px-4 py-3">
                    <h5 style={{color:"#e86a25"}}>Patient Details</h5>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className="form-control"  placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className="form-control"  placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control"  placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Mobile No:</label>
                        <input type="text" className="form-control"  placeholder="10 digit phone Number"/>
                    </div>
                    <div className="form-group">
                        <label>Date of birth(Age):*</label>
                        <input type="date" className="form-control"  placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Gender:*</label>
                        <div className="form-check form-check-inline ml-5">
                            <input className="form-check-input mt-1" type="radio" value="option1"/>
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input mt-1" type="radio" value="option2"/>
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="text-center mt-3 rounded" style={{background:"#e86a25"}}>
                            <button className="btn text-white fw-bold">Proceed</button>
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