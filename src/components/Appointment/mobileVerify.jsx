import React, {Component} from "react";
import {Link} from "react-router-dom";
class MobileVerify extends Component{
    state={

    }


    render(){


        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb",height:"100vh"}}>
                <div className="CGrew2">
                    <div className="px-4 py-3">
                        <h5 style={{color:"#e86a25"}}>Mobile Verify Number</h5>

                        <div className="form-group">
                            <label>Mobile Number or Email:</label>
                            <input type="text" className="form-control"  placeholder="Enter MobileNo/Email"/>
                        </div>
                        <div className="form-group">
                            <label>Please enter verification code(OTP)*:</label>
                            <input type="text" className="form-control"  placeholder="Enter OTP"/>
                            <div className="text-primary text-end"><small>Still not received OTP?</small></div>
                        </div> 
                        <div className="mt-3 text-end" >
                            <button className="dgtrF4 float-start">Submit OTP</button>
                            <button className="dgtrA2">Resend OTP</button>
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
export default MobileVerify;