import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';
import './css.css'
import {withRouter} from 'react-router-dom'

class LowerPart extends Component {
    clickHandler()
    {
        this.props.history.push('/secondPage');
    }
    render() {
        return (
            <div style={{ textAlign: "center", background: "white", color: "black", height: "40vh", borderRadius: "2em" }}>
                <div style={{ paddingTop: '3em' }}>
                    Please enter your mobile no.
                </div>
                {/* <div>
                    <NumberFormat className="changeBorderRadius" placeholder="Mobile" customInput={TextField}  variant="filled"  format="#####-#####" style={{width:"80%"}}  />
                </div> */}
                <div>
                    <form>
                        <input type="number" min="11111111111" max="9999999999" style={{ width: "80%", height: "3em", border: "none", borderRadius: "1.5em", background: "lightgrey", outline: "none" }} />
                    </form>
                </div>
                <div style={{bottom:"0",textAlign:"right",paddingRight:"1em",fontSize:"70px",marginTop:"2em",color:"#00bfa5"}}>
                    <i class="fa fa-arrow-circle-right" onClick={()=>this.clickHandler()}></i>
                </div>
            </div>
        )
    }
}

export default withRouter(LowerPart);
