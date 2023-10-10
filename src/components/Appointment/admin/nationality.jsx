import React, {Component} from "react";
import {Link} from "react-router-dom";
class Natinality extends Component{
    state={

    }


    render(){
        return(
            <div className="" style={{background:"#f2f3f3"}}>
                <div className="container py-3">
                    <h4 className="fw-bold" >Nationality Details</h4>
                    
                   
                    <div class="row pt-3">
                        <div className="form-group col-md-4 col-12">
                            <label>Nationality1<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-4 col-12">
                            <label>Nationality1<span className="text-danger"> *</span></label>
                            <input type="text" className="form-control jnhXd4" name="" value="" placeholder="" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div className="col-md-8 col-12">
                            <h4 className="kdAcS3">Upload Supporting Documents</h4>
                        </div>
                    </div>
                    <div class="row pt-3">
                        <div className="form-group col-md-4 col-12">
                            <label>Type<span className="text-danger"> *</span></label>
                            <select className="form-select " name="city" value="" onChange={this.handleChange}>
                               
                            {/* {cities.map((s1,index)=>(
                                <option key={index}>{s1.name}</option>
                            ))} */}
                            </select>
                        </div>
                        <div className="form-group col-md-2 col-12">
                            <input type="file" className="fhxns3" id="file" name="file" value="" placeholder="" onChange={this.handleChange} />
                            <label for="file">Browse</label>
                        </div>
                    </div>

                    <div className="my-3 fw-bold" style={{color:"gray"}}>Allowed File Types: bmp, png, jpg, png, ppt, ppts, doc, docx, pdf, odg, odp, odt. Maximum File Size: 2048KM</div>
                    
                    <div className="text-end mt-4 border-top py-3" >
                        <button className="btn btn-primary btn-sm mx-2 px-3">Save</button>
                        <button className="btn btn-light btn-sm mx-2 px-3 ">Close</button>
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Natinality;