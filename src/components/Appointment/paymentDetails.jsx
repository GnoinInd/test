import React, {Component} from "react";
import {Link} from "react-router-dom";
class PaymentDetails extends Component{
    state={ paymentForm:{amount:"",cardNo:"",exp:"",cvv:""},errors:{}
    }   
    handleChange=(e)=>{
        const {"currentTarget":input} = e;
        let s1 = {...this.state};
        if(!isNaN(input.value) && !input.name=="exp"){
            s1.paymentForm[input.name] = input.value;
        }else{
            s1.paymentForm[input.name] = input.value;
        }
        
        this.setState(s1);
    }

    handleSubmit=()=>{
        let s1 = {...this.state};
        let errors = this.validateAll();
        // let obj = {...s1.selectData,...s1.paymentForm};
        if(this.isValid(errors)){
            console.log(s1.paymentForm);
            // this.postData("/addpatient",obj);
            // this.props.history.push({pathname:"/mobileverify",state:obj});
        }
        else {
            s1.errors = errors;
        }
        this.setState(s1);
    }
    isValid=(errors)=>{
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr)=>(errors[curr]?acc+1:acc),0);
        return count==0;
        }
    
        validateAll=()=>{
        let {amount,cardNo,exp,cvv} = this.state.paymentForm;
        let errors={};
        errors.amount = this.validateAmount(amount);
        errors.cardNo = this.validateCard(cardNo);
        errors.exp = this.validateExp(exp);
        errors.cvv = this.validateCvv(cvv);
        return errors;
        }

        validateAmount=(amount)=>(!amount?"Amount must be entered":"");
        validateCard=(cardNo)=>(!cardNo?"Card must be entered":cardNo.length<16 ||cardNo.length>16?"Card Number Invalid":"");
        validateExp=(exp)=>(!exp?"Expired must be entered":exp.length<5 ||exp.length>5?"Expired Invalid":exp[2]=="/"?"":"Expired Invalid");
        validateCvv=(cvv)=>(!cvv?"CVV must be entered":cvv.length<3 ||cvv.length>3?"CVV No Invalid":"")
    

    render(){
        const{paymentForm,errors} = this.state;
        const {amount,cardNo,exp,cvv} =paymentForm; 
        console.log(paymentForm);
        return(
            <div className="container-fluid py-4 px-2" style={{background:"#ebebeb",height:"100vh"}}>
                <div className="kjhCd4">
                <h5 className="p-2 border-bottom" style={{background:"#ebebeb"}}>Payment Details</h5>
                    <div className="px-4 py-3">
                        <div className="form-group">
                            <label className="fw-bold">Amount to Pay:</label>
                            <input type="text" className={"form-control "+(errors.amount?"border-danger":"")} name="amount" value={amount} placeholder="Enter Amount" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="fw-bold">Card Number</label>
                            <input type="text" className={"form-control "+(errors.cardNo?"border-danger":"")} name="cardNo" value={cardNo} onChange={this.handleChange}/>
                        </div> 
                        <div className="row">
                            <div className="col-md-5 col-7">
                                <div className="form-group">
                                    <label className="fw-bold">Expiry Date(MM/YY)</label>
                                    <input type="text" className={"form-control "+(errors.exp?"border-danger":"")}  name="exp" value={exp} placeholder="MM/YY" onChange={this.handleChange}/>
                                </div> 
                            </div>
                            <div className="col-md-5 col-7">
                                <div className="form-group">
                                    <label className="fw-bold">Security Code(CVV)</label>
                                    <input type="text " className={"form-control "+(errors.cvv?"border-danger":"")} name="cvv" value={cvv} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-2 text-start pl-0">
                                <img className="mt-4" src="https://static.thenounproject.com/png/1006865-200.png" width="50px" />
                            </div>

                        </div>
                        <div className="mt-3 text-center rounded" style={{background:"#d6d5d5",cursor: "pointer"}} onClick={()=>this.handleSubmit()}>
                            <button className="xdfSe3" >Confirm Payment</button>
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
export default PaymentDetails;