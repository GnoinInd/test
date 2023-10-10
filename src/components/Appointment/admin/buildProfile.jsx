import React, {Component} from "react";
import {Link} from "react-router-dom";
class BuildProfile extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"rgb(230, 230, 230)"}}>
                <div className="container vhsda2 py-3">
                    <h4 className="text-center text-primary" >Build Your Hospital Profile</h4>
                    <div className="d-flex py-4" style={{margin:"0 auto"}}> 
                        
                        <div className="arrowc4">
                            <div className="lineW3"></div>
                            <div className="cdsWq3 khcdx1">Build Profile</div>
                        </div>
                        <div className="arrowd3">
                            <div className="lineW3"></div>
                            <div className="cdsWq3">Hospital Details</div>
                        </div>
                        <div className="arrowd3">
                            <div className="lineW3"></div>
                            <div className="cdsWq3">Add specialist</div>
                        </div>
                        <div className="circled3">
                            <div className="cdsWqs3 ">Add Doctor</div>
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Name:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital location:</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose city</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>City:</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose city</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */}
                            </select>
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hospital Area:</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose city</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */}
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Address line 1:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Pin Code:</label>
                            <input type="text" className="form-control w-50" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Phone No.:</label>
                            <input type="text" className="form-control w-75" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Helpline No:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Email ID:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Fax No.:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Password:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Re-Enter Password:</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary">Register Hospital</button>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default BuildProfile;