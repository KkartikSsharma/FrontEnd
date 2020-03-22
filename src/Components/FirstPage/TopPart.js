import React, { Component } from 'react'
import LowerPart from './LowerPart'

export default class TopPart extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#00bfa5", height: "70vh",color:"white",textAlign:"left" }}>
                <div style={{ textAlign: "left", padding: "2em", paddingTop: "4em" }}>
                    <i className="fa fa-chevron-left"></i>
                </div>
                <div style={{marginTop:"5em"}}>
                    <span style={{ fontSize: "3em", padding: "2em"}}>step</span>

                </div>
                <div style={{marginTop:"-2em"}}>
                    <span style={{ fontSize: "10em", fontWeight: "bold", padding: "0.5em" }}>01</span>
                </div>
                <div>
                    <LowerPart/>
                </div>
            </div>
        )
    }
}
