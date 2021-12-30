import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import dusk from '../../assets/dusk.png';

function Header() {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Our demonstration website with amazing React
                </h1>
                <p>Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this. Why are you reading this.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address"></input>
                    <button type="button">Get started!</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people}/>
                    <p>1,600 people requested access to this site.</p>
                </div>
                
            </div>
            <div className="gpt3__header-image">
                    <img src={dusk} alt="dusk"/>
                </div>
        </div>
    )
}

export default Header
