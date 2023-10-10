import React, {Component} from "react";
import {Link} from "react-router-dom";
class Address extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"rgb(230, 230, 230)"}}>
                <div className="container py-3 vhsda2">
                    <h3 className="text-primary" >Address Details</h3>
                    
                    <div class="row pt-3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Address Type<span className="text-danger"> *</span></label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Address Line 1<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Address Line 2</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Pin Code<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Country<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>City<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>State/Union Territory<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>Primary Addesss</div>
                        <input type="checkbox" className="" name="" value="" placeholder="" onChange={this.handleChange} />
                    </div>
                    
                    <div className="text-end mt-4 border-top py-3" >
                        <button className="btn btn-primary btn-sm mx-2 px-3">Save</button>
                        <button className="btn btn-primary btn-sm mx-2 px-3 ">Back</button>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Address;