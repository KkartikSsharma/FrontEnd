import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';
import '../FirstPage/css.css'
import OtpInput from 'react-otp-input';
import { withRouter } from 'react-router';

class LowerPartSecond extends Component {

    handleKeyOne() {
        this.refs.two.focus();
    }
    handleKeyTwo() {
        this.refs.three.focus();
    }
    handleKeyThree() {
        this.refs.four.focus();
    }
    handleKeyFour() {
        this.refs.enter.focus();
    }
    clickHandler(){
        this.props.history.push('/thirdPage')
    }
    render() {
        return (
            <div style={{ textAlign: "center", background: "white", color: "black", height: "45vh", borderRadius: "2em" }}>
                <div style={{ paddingTop: '1em' }}>
                    Please enter the 4 digit OTP
                </div><br />
                {/* <div>
                    <NumberFormat className="changeBorderRadius" placeholder="Mobile" customInput={TextField}  variant="filled"  format="#####-#####" style={{width:"80%"}}  />
                </div> */}
                <div style={{ textAlign: "center" }}>
                    <input type="text" className="optClass" maxLength="1" ref="one" onChange={() => this.handleKeyOne()} />&nbsp;
                    <input type="text" className="optClass" maxLength="1" ref="two" onChange={() => this.handleKeyTwo()} />&nbsp;
                    <input type="text" className="optClass" maxLength="1" ref="three" onChange={() => this.handleKeyThree()} />&nbsp;
                    <input type="text" className="optClass" maxLength="1" ref="four" onChange={() => this.handleKeyFour()} />
                </div>
                <div ref="enter" style={{ bottom: "0", textAlign: "right", paddingRight: "1em", fontSize: "70px", marginTop: "2em", color: "#f50057" }}>
                    <i class="fa fa-arrow-circle-right" onClick={()=>this.clickHandler()}></i>
                </div>
            </div>
        )
    }
}

export default  withRouter(LowerPartSecond);