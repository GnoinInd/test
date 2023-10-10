import React, {Component} from "react";
import {Link} from "react-router-dom";
class AddSpeciality extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"rgb(230, 230, 230)"}}>

                <div className="container vhsda2 py-3">
                    <h4 className="text-center text-primary" >Add Speciality</h4>
                    <div className="d-flex py-4" > 
                        
                        <div className="arrowc4" style={{margin:"0 auto"}}>
                            <div className="lineW3 lineQ1"></div>
                            <div className="cdsWq3 khcdx1">Build Profile</div>
                        </div>
                        <div className="arrowc4" style={{margin:"0 auto"}}>
                            <div className="lineW3 lineQ1"></div>
                            <div className="cdsWq3 khcdx1">Hospital Details</div>
                        </div>
                        <div className="arrowc4" style={{margin:"0 auto"}}>
                            <div className="lineW3"></div>
                            <div className="cdsWq3 khcdx1">Add Specialist</div>
                        </div>
                        <div className="circled3" style={{margin:"0 auto"}}>
                            <div className="cdsWqs3 ">Add Doctor</div>
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Name</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Location</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Area</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                     
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Speciality</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Add Speciality</label>
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
export default AddSpeciality;