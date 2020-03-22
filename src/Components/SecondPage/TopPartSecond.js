import React, { Component } from 'react'
import LowerPartSecond from './LowerPartSecond'

export default class TopPartSecond extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f50057", height: "55vh",color:"white",textAlign:"left" }}>
                <div style={{ textAlign: "left", paddingLeft: "2em", paddingTop: "4em" }}>
                    <i className="fa fa-chevron-left"></i>
                </div>
                <div style={{marginTop:"3em"}}>
                    <span style={{ fontSize: "3em", paddingLeft: "2em"}}>step</span>
                </div>
                <div style={{marginTop:"-2.5em"}}>
                    <span style={{ fontSize: "10em", fontWeight: "bold", paddingLeft: "0.5em" }}>02</span>
                </div>
                <div>
                    <LowerPartSecond/>
                </div>
            </div>
        )
    }
}
