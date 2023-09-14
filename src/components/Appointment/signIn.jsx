import React, {Component} from "react";
import {Link} from "react-router-dom";
class SignIn extends Component{
    state={

    }


    render(){
        return(
            <div className="container-fluid py-5" style={{background:"rgb(230, 230, 230)",height:"100vh"}}>
            
                <div className="hcdZs4">
                    <h4 className="text-center mb-4">Sign In</h4>
                    <div className="form-group vfdeSw">
                        <label className="mt-1 mr-3">Mobile No: </label>
                        <input className="form-control dsAew3" type="text" name="q"  placeholder="" />  
                    </div>
                    <div className="text-center mt-4">
                        <button className="kjcdS4 mr-3">Sign In</button>
                        <button className="kjcdS4 ml-3">Sign Up</button>
                    </div>
                    <div className="text-center mt-4">
                        <div className="kiuCd4"><i class="fa-brands fa-facebook-f mr-1"></i>facebook</div>
                    </div>
                    <div className="text-center mt-3">
                        <div className="kiuaw3"><i class="fa-brands fa-google mr-1"></i>Google</div>
                    </div>
                    <div className="row mt-4 py-2" style={{background:"#e9e7e7"}}>
                        <div className="my-2">Download our <span className="text-primary">Ask</span> <span className="text-warning">Apollo</span> App</div>
                        <div className="col-6"><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg" width="100%"/></div>
                        <div className="col-6 text-end"><img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg" width="90%"/></div>

                    </div>

                </div>
                

            </div>
        )
    }

}
export default SignIn;