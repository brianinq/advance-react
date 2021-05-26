import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import team from '../img/teamwork.svg'
import home2 from '../img/home2.png'

export default function Services(){
    return(
        <div className="description">
            <h2>High <span>Quality</span> Services</h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="" />
                        <h3>Timely</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={team} alt="team icon" />
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="diapragm icon" />
                        <h3>Profficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={money} alt="money icon" />
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="image">
                    <img src={home2} alt="home services" />
                </div>
            </div>
        </div>
    )
}