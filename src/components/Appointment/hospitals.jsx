import React, {Component} from "react";
import {Link} from "react-router-dom";
class Hospital extends Component{
    state={
       imageArr:[
        "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0IBQ5CsQz5p_dkbjGn7MI89g4rj108MhKa0dyclWnD4EbxGn2MdHH12nE4mEYKX_wOk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPGjIOs6ETTJGux95IYrNzgowKVmH7vCcwaA4B5tg-VjSioGFiMqDqZmp4J5JPkN1N70&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFpms2kQ5ocZaw8N1TpZEf7jx3oeCNwM0OQ&usqp=CAU",
        "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0IBQ5CsQz5p_dkbjGn7MI89g4rj108MhKa0dyclWnD4EbxGn2MdHH12nE4mEYKX_wOk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPGjIOs6ETTJGux95IYrNzgowKVmH7vCcwaA4B5tg-VjSioGFiMqDqZmp4J5JPkN1N70&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFpms2kQ5ocZaw8N1TpZEf7jx3oeCNwM0OQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4E-9glL1JTQAI3DSHGBloz9FM_2vBq0x0SQ&usqp=CAU",
    ],
        pageNo:1,

    }
    handlePage=(page)=>{
        let s1 = {...this.state};
        s1.pageNo = page;
        this.setState(s1);
    }


    render(){
        const {imageArr,pageNo} = this.state;
        let size = 8;
        let startIndex = (pageNo-1)*size;
        let endIndex = imageArr.length>(startIndex +size-1)? (startIndex + size-1):imageArr.length-1;
        let imageArr1 = imageArr.filter((s1,index)=>(index>=startIndex && index<=endIndex));
        let pageArr=[];
        let pageLen = Math.ceil(imageArr.length/size);
        for(let i=1;i<=pageLen;i++){pageArr.push(i)}

        return(
            <div className="container-fluid py-3" style={{background:"#f1f3f6"}}>
                <div className="container jhYgt5">
                    <div className="d-flex mr-4" style={{width:"250px"}}>
                        <select className="form-select cdsAw2" id="inlineFormCustomSelect">
                            <option  >Choose Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label className="mx-2 mt-1 fw-bold">Location</label>
                    </div>
                    <div className="d-flex kcdSw" style={{width:"250px"}}>
                        <select className="form-select cdsAw2" id="inlineFormCustomSelect">
                            <option  >Choose Area</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label className="mx-2 mt-1 fw-bold">Area</label>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="row">
                        {imageArr1.map((m1,index)=>(
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={index}>
                                <div className="fdekiu">
                                    <img  src={m1} width="100%" height="80%" />
                                    <div className="mt-2 fw-bold">Appllo</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="my-4 text-center">
                    {pageArr.map((p1,index)=>(
                        <span className={"kjUde3 "+(pageNo==p1?"text-white bg-dark border-0":"")} key={index} onClick={()=>this.handlePage(p1)}>{p1}</span>
                    ))}
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Hospital;



