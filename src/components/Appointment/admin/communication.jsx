import React, {Component} from "react";
import {Link} from "react-router-dom";
class Communication extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"rgb(230, 230, 230)"}}>
                <div className="container py-3 vhsda2">
                    <h3 className="" >Communication Details</h3>
                    
                    <div class="row pt-3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Country Code:</label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                                <option disabled value="" >Choose</option>
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */} 
                            </select>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Mobile Phone Number<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Home Phone Number<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Work Phone Number<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Emergency Phone Number</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Voip</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Gmail</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Yahoo mail</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Hotmail</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row kjhds3">
                        <div className="form-group col-lg-4 col-md-6 col-12">
                            <label>Other mail Id</label>
                            <input type="text" className="form-control" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="text-end mt-4 border-top py-3" >
                        <button className="btn btn-primary btn-sm mx-2 px-3">Save</button>
                        <button className="btn btn-light btn-sm mx-2 px-3 ">Close</button>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Communication;