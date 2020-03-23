import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';
import '../FirstPage/css.css'
import {withRouter} from 'react-router-dom'

class LowerPartFourth extends Component {
    clickHandler()
    {
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{ textAlign: "center", background: "white", color: "black", height: "40vh", borderRadius: "2em" }}>
                <div style={{ paddingTop: '3em' }}>
                    Please enter your details
                </div>
                {/* <div>
                    <NumberFormat className="changeBorderRadius" placeholder="Mobile" customInput={TextField}  variant="filled"  format="#####-#####" style={{width:"80%"}}  />
                </div> */}
                <div>
                        <input type="text" placeholder="Full name"
                        style={{ width: "60%", height: "3em", border: "none",paddingLeft:"20px",marginTop:"20px", borderRadius: "1.5em", background: "lightgrey", outline: "none" }} />
                        
                        <input type="text" placeholder="Enter your email"
                        style={{ width: "60%", height: "3em", border: "none",paddingLeft:"20px",marginTop:"20px", borderRadius: "1.5em", background: "lightgrey", outline: "none" }} />
                </div>
                <div style={{bottom:"0",textAlign:"right",paddingRight:"1em",fontSize:"70px",marginTop:"0.5em",color:"#ffee58"}}>
                    <i class="fa fa-arrow-circle-right" onClick={()=>this.clickHandler()}></i>
                </div>
            </div>
        )
    }
}

export default withRouter(LowerPartFourth);
