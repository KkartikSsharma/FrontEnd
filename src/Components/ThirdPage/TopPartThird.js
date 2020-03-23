import React, { Component } from 'react'
import LowerPartThird from './LowerPartThird'

export default class TopPartThird extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#448aff", height: "60vh",color:"white",textAlign:"left" }}>
                <div style={{ textAlign: "left", paddingLeft: "2em", paddingTop: "4em" }}>
                    <i className="fa fa-chevron-left"></i>
                </div>
                <div style={{marginTop:"5em"}}>
                    <span style={{ fontSize: "3em", paddingLeft: "2em"}}>step</span>
                </div>
                <div style={{marginTop:"-2.5em"}}>
                    <span style={{ fontSize: "10em", fontWeight: "bold", paddingLeft: "0.5em" }}>03</span>
                </div>
                <div>
                    <LowerPartThird/>
                </div>
            </div>
        )
    }
}
