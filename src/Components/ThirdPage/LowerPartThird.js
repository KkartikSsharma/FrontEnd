import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';
import '../FirstPage/css.css'
import OtpInput from 'react-otp-input';
import { withRouter } from 'react-router';

class LowerPartThird extends Component {

    clickHandler()
    {
        this.props.history.push('/fourthPage')
    }
    render() {
        return (
            <div style={{ textAlign: "center", background: "white", color: "black", height: "40vh", borderRadius: "2em" }}>
                <div style={{paddingTop: '3em' }}>
                    Please select your gender
                </div><br />
                <div style={{fontSize:"80px",color:"#448aff"}}>
                <i class="fa fa-male"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-female"></i>
                </div>
                <div >
                    <button style={{border:"none",borderTopLeftRadius: "15px",borderTopRightRadius: "15px",borderBottomLeftRadius: "15px",borderBottomRightRadius: "15px"
                    ,width:"60%",background:"lightgrey",outline:"none",padding:"5px "}}>Other</button>
                </div>
                <div ref="enter" style={{ bottom: "0", textAlign: "right", paddingRight: "1em", fontSize: "70px", marginTop: "1em", color: "#448aff" }}>
                    <i class="fa fa-arrow-circle-right" onClick={()=>this.clickHandler()}></i>
                </div>
            </div>
        )
    }
}

export default withRouter(LowerPartThird);