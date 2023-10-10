import React, {Component} from "react";
import {Link} from "react-router-dom";
class BuildProfile extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"#f2f3f3"}}>
                <div className="container vhsda2 py-3">
                    <h4 className="fw-bold" >Basic Details</h4>
                    
                   
                    <div class="row pt-3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Title<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4 w-50" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>First Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Middle Name</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Last Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Preferred Name<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Date Of Birth<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Gender<span className="text-danger"> *</span></label>
                            <select className="form-select jnhXd4" name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose gender</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */}
                            </select>
                        </div>
                        <div className="form-group col-lg-3 col-md-6 col-12">
                            <label>Blood Group</label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="my-3"><small>If Date of Birth mentioned here is incorrect, kindly contect your HR Officer.</small></div>
                    
                    <div className="text-end mt-4 border-top py-3" >
                        <button className="btn btn-primary btn-sm mx-2 px-3">Save</button>
                        <button className="btn btn-light btn-sm mx-2 px-3 ">Close</button>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default BuildProfile;