import React, {Component} from "react";
import {Link} from "react-router-dom";
class Rank extends Component{
    state={

    }


    render(){


        return(
            
                <div className="container py-5">

                    <div className="text-center" >
                        <h5>Choose Rank</h5>
                        <div className="lkjSd4"><Link className=" text-decoration-none" to="/">1st Rank</Link></div>
                        <div className="lkjSd4"><Link className=" text-decoration-none" to="/">2nd Rank</Link></div>
                        <div className="lkjSd4"><Link className=" text-decoration-none" to="/">3rd Rank</Link></div>
                        <div className="lkjSd4"><Link className=" text-decoration-none" to="/">4th Rank</Link></div>
                    </div>
                </div>
               
         
        )
    }

}
export default Rank