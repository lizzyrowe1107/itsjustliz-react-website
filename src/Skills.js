import React from 'react';
import './Skills.css';
import logo from './logo.svg';
import htmllogo from './html-logo.png';
import csslogo from './css-logo.png';
import javascriptlogo from './javascript-logo.svg';
import pythonlogo from './python-logo.png';
import SQLlogo from './SQL-logo.png';
import pwrautomatelogo from './pwrautomate-logo.png';
import pwrappslogo from './pwrapps-logo.png';


export default function Skills() {
    return (
        <div>
            <h3>Skills</h3>
            <div className="row">
                <div className="col-1">
                    <img src={logo} className="react-logo" alt="logo" />
                </div>
                <div className="col-1">
                    <img src={htmllogo} className="html-logo" alt="html-logo"></img>
                </div>
                <div className="col-1">
                    <img src={csslogo} className="css-logo" alt="css-logo"></img>
                </div>
                <div className="col-1">
                    <img src={javascriptlogo} className="javascript-logo mt-3" alt="javascript-logo"></img>
                </div>
                <div className="col-1">
                    <img src={pythonlogo} className="python-logo mt-3" alt="python-logo"></img>
                </div>
                <div className="col-1">
                    <img src={SQLlogo} className="SQL-logo mt-3" alt="SQL-logo"></img>
                </div>
                <div className="col-1">
                    <img src={pwrautomatelogo} className="pwrautomate-logo mt-3" alt="pwrautomate-logo"></img>
                </div>
                <div className="col-1">
                    <img src={pwrappslogo} className="pwrapps-logo mt-3" alt="pwrapps-logo"></img>
                </div>
                <div className="col-1">
                    <img src={pwrappslogo} className="pwrapps-logo mt-3" alt="pwrapps-logo"></img>
                </div>
                <div className="col-1">
                    hi
                </div>
                <div className="col-1">
                    hi
                </div>
                <div className="col-1">
                    hi
                </div>

            </div>
        </div>
    )
}