import React, {Component} from "react";
import {Link} from "react-router-dom";
class Dr extends Component{
    state={

    }


    render(){


        return(
            <div className="container-fluid pb-5" style={{background:"rgb(230, 230, 230)"}}>
                <div className="container py-3">
                    <div className="" style={{width:"200px"}}>
                        <select className="form-select cdsAw2" id="inlineFormCustomSelect">
                            <option  >Choose Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-4 bg-white border">
                            <div className="row">
                                <div className="col-2 pr-0"> 
                                    <img src="https://cdn.askapollo.com/live/images/doctors/defaultfemale.jpg" width="100%"/>
                                </div>
                                <div className="col-7">
                                    <div>Dr. Vikas Verma</div>
                                    <div>(DCH) Pediatrician</div>
                                    <div>(DCH) Pediatrician</div>
                                    <div>(DCH) Pediatrician</div>
                                    <div>(DCH) Pediatrician</div>
                                    <div>(DCH) Pediatrician</div>
                                </div>
                                <div className="col-3">
                                    <div>alnkf sankfadndcdf aknlfadm </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Dr