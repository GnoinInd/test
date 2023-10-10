import React, {Component} from "react";
import {Link} from "react-router-dom";
class AddHospital extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"rgb(230, 230, 230)"}}>

                <div className="container vhsda2 py-3">
                    <h4 className="text-center text-primary" >Build Your Hospital Profile</h4>
                    <div className="d-flex py-4" style={{margin:"0 auto"}}> 
                        
                        <div className="arrowc4">
                            <div className="lineW3 lineQ1"></div>
                            <div className="cdsWq3 khcdx1">Build Profile</div>
                        </div>
                        <div className="arrowc4">
                            <div className="lineW3"></div>
                            <div className="cdsWq3 khcdx1">Hospital Details</div>
                        </div>
                        <div className="arrowd3">
                            <div className="lineW3"></div>
                            <div className="cdsWq3">Add Specialist</div>
                        </div>
                        <div className="circled3">
                            <div className="cdsWqs3 ">Add Doctor</div>
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Type</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Traded As</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Isln</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                    <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Industry</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Founded</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Operating_income</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                    <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Founders</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Headquarters</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Area Served</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Revenue</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Website</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary px-5">Save</button>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default AddHospital;