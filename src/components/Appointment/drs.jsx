import React, {Component} from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Dr extends Component{
    state={
        show:false,
    }
    handleShow=(val)=>{
        let s1 = {...this.state};
        s1.show = val;
        this.setState(s1);
    }


    render(){
        const {show} = this.state;

        let dateShow = []
        for(let i=0;i<10;i++){
            let date =  new Date(Date.now() + 1000 * 3600 * i*24)
            let day = date.getDate(); let month = date.toLocaleString('en-US', {month: 'short'});
            let week = date.toLocaleString('en-US', {weekday: 'short'});
             dateShow.push({day:day,month:month,week:week});
        }

        console.log(dateShow);

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
          };
        return(
            <div className="container-fluid pb-5" style={{background:"rgb(230, 230, 230)",height:"auto"}}>
                <div className="container py-3">
                    <div className="" style={{width:"200px"}}>
                        <select className="form-select cdsAw2" id="inlineFormCustomSelect">
                            <option  >Choose Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    
                </div>
                <div>
                    <div className="container p-0 gfSde4" >
                        <div className="bg-white border">
                            <div className="row p-2">
                                <div className="col-2"> 
                                    <img src="https://cdn.askapollo.com/live/images/doctors/defaultfemale.jpg" width="100%"/>
                                </div>
                                <div className="col-sm-6 col-12">
                                    <div className="fw-bold" style={{color:"#5a8ca1"}}>Dr. Vikas Verma</div>
                                    <div className="row mx-0" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                        <div className="col-5 p-0">
                                            <small>Qualification:</small>
                                        </div>
                                        <div className="col-7 p-0">
                                            <small>Msc. in Dietetics </small>
                                        </div>
                                    </div>
                                    <div className="row mx-0" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                        <div className="col-5 p-0">
                                            <small>Exprence:</small>
                                        </div>
                                        <div className="col-7 p-0">
                                            <small>10yrs</small>
                                        </div>
                                    </div>
                                    <div className="row mx-0" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                        <div className="col-5 p-0">
                                            <small>Speciality:</small>
                                        </div>
                                        <div className="col-7 p-0">
                                            <small>gynaecologist</small>
                                        </div>
                                    </div>
                                    <div className="row mx-0" style={{borderBottom:"1px dotted #e2e0e0"}}>
                                        <div className="col-5 p-0">
                                            <small>Language:</small>
                                        </div>
                                        <div className="col-7 p-0">
                                            <small>English, Hindi </small>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-4 col-12 jhSdew">
                                    <div><small >Monday|Tusesday, Wednesday|Thursday, Saturday</small></div>
                                    <div className="mt-2"><small style={{color:"#f08345"}}>(09:15 Am-01:45 PM, 01:45PM-08:00PM|09:00 AM-01:45PM, 01:45 PM-08:00 PM|09:00 AM-01:45PM, 01:45 PM-08:00 PM)</small></div>
                                    <div><small><i class="fa-solid fa-location-dot mr-2" style={{color:"#5a8ca1"}}></i>Apollo Clinic Prince Anwar Shah Road</small></div>
                                    <div className="mt-4 text-center">
                                        <button className="btn btn-sm text-white fw-bold" style={{background:"#f08345"}} onClick={()=>this.handleShow(true)}>Book Appointment</button>
                                    </div>
                                </div>
                            </div>


                            {show?
                            <div className="py-2 ">
                                <div className="szAw2" onClick={()=>this.handleShow(false)}>x close</div>
                                <div className="text-center mt-1" >
                                <label className="text-info mr-3" style={{fontSize:"14px"}}>Select Hospital:</label>
                                    <select className="custom-select csDew3">
                                        <option  >Choose Hospitals</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                               
                                <h6 className="text-center py-2 m-0" style={{color:"#f08345"}}>Select a time slot to book an appointment</h6>
                                <div className="" style={{background:"#cfcbcb"}}>
                                    <div className="sdWed4">
                                        <Slider {...settings}>
                                            {dateShow.map((dt,index)=>(
                                                <div className="cdSew3" key={index}>
                                                    <div className="cvfSe4">{dt.day}</div>
                                                    <div className="dsewFr">
                                                        <div style={{position:"absolute",marginTop:"10px"}}>{dt.week}</div>
                                                        <div style={{position:"absolute",marginTop:"20px"}}>{dt.month}</div>
                                                    </div>
                                                    
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="row py-2 mx-0" style={{background:"rgb(227, 242, 245)"}}>
                                                
                                    <div className="col-sm-3 col-12 text-center">
                                        <i class="fa-solid fa-mug-saucer" style={{position:"absolute",marginLeft:"-6px"}}></i>
                                        <div style={{fontSize:"14px",marginTop:"14px"}}>Morning</div>
                                    </div>
                                    <div className="col-sm-9 col-12 mt-1">
                                        <span className="kcdSe4">11:15-11:30</span>
                                        <span className="kcdSe4">11:30-11:45</span>
                                        <span className="kcdSe4">11:45-12:00</span>
                                    </div>
                                </div>
                                <div className="row py-2 mx-0" style={{background:"#fff"}}>
                                    <div className="col-sm-3 col-12 text-center">
                                        <i class="fa-solid fa-sun" style={{position:"absolute",marginLeft:"-6px"}}></i>
                                        <div style={{fontSize:"14px",marginTop:"14px"}}>Afternoon</div>
                                    </div>
                                    <div className="col-sm-9 col-12 mt-1">
                                        <span className="kcdSe4">11:15-11:30</span>
                                        <span className="kcdSe4">11:30-11:45</span>
                                        <span className="kcdSe4">11:45-12:00</span>
                                        <span className="kcdSe4">11:45-12:00</span>
                                        <span className="kcdSe4">11:45-12:00</span>
                                    </div>
                                </div>
                                <div className="row py-2 mx-0" style={{background:"#f7f3f3"}}>
                                    <div className="col-sm-3 col-12 text-center">
                                        <i class="fa-solid fa-moon" style={{position:"absolute",marginLeft:"-6px"}}></i>
                                        <div style={{fontSize:"14px",marginTop:"14px"}}>Night</div>
                                    </div>
                                    <div className="col-sm-9 col-12 mt-1">
                                        <span>Not slots available</span>
                                    </div>
                                </div>

                            </div>
                            :""}
                        </div>
                        
                    </div>
                </div>
                

            </div>
        )
    }

}
export default Dr;