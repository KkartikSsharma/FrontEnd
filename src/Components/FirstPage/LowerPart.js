import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import { TextField } from '@material-ui/core';
import './css.css'

export default class LowerPart extends Component {
    render() {
        return (
            <div style={{ textAlign: "center", background: "white", color: "black", height: "40vh", borderRadius: "2em" }}>
                <div style={{ paddingTop: '3em' }}>
                    Please enter your mobile no.
                </div><br />
                {/* <div>
                    <NumberFormat className="changeBorderRadius" placeholder="Mobile" customInput={TextField}  variant="filled"  format="#####-#####" style={{width:"80%"}}  />
                </div> */}
                <div>
                    <form>
                        <input type="number" min="11111111111" max="9999999999" style={{ width: "80%", height: "3em", border: "none", borderRadius: "1.5em", background: "lightgrey", outline: "none" }} />
                    </form>
                </div>
            </div>
        )
    }
}
