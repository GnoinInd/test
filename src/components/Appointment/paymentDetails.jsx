import React, {Component} from "react";
import {Link} from "react-router-dom";
class MobileVerify extends Component{
    state={

    }


    render(){


        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb",height:"100vh"}}>
                <div className="kjhCd4">
                <h5 className="p-2 border-bottom" style={{background:"#ebebeb"}}>Payment Details</h5>
                    <div className="px-4 py-3">
                        <div className="form-group">
                            <label className="fw-bold">Amount to Pay:</label>
                            <input type="text" className="form-control"  placeholder="Enter Amount"/>
                        </div>
                        <div className="form-group">
                            <label className="fw-bold">Card Number</label>
                            <input type="text" className="form-control" />
                        </div> 
                        <div className="row">
                            <div className="col-md-5 col-7">
                                <div className="form-group">
                                    <label className="fw-bold">Expiry Date(MM/YY)</label>
                                    <input type="text" className="form-control" />
                                </div> 
                            </div>
                            <div className="col-md-5 col-7">
                                <div className="form-group">
                                    <label className="fw-bold">Security Code(CVV)</label>
                                    <input type="text " className="form-control" />
                                </div>
                            </div>
                            <div className="col-2 text-start pl-0">
                                <img className="mt-4 " src="https://static.thenounproject.com/png/1006865-200.png" width="50px" />
                            </div>

                        </div>
                        <div className="mt-3 text-center rounded" style={{background:"#d6d5d5",cursor: "pointer"}}>
                            <button className="xdfSe3">Confirm Payment</button>
                        </div>   
                        <div className="text-end py-2" >
                            <img src="https://www.nicepng.com/png/detail/33-336324_icons-visa-card-logo-png.png" width="100px" />
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }

}
export default MobileVerify;