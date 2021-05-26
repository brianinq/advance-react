import React from 'react'
import home1 from '../img/home1.png'

export function About(){
    return(
        <div>
            <div className="description">
                <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>Your <span>Dreams</span> come</h2>
                </div>
                <div className="hide">
                    <h2>true.</h2>
                </div>
                </div>
                <p>Contact us to make the ideas you have come to life</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="home about" />
            </div>
        </div>
    )
}