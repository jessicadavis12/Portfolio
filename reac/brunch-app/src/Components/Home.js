import React from 'react';
import {Link} from 'react-router-dom'
import './home.css'

import Loft from '../assets/images/loft.png'

function Home (){
    return(
        <div className="home">
                <h1>The Brunch Loft</h1>
                <div className="home-img">
                    <img src= {Loft} alt="cafe"/>
                </div>
                <div className="home-content">
                    <p>Artisan Breakfast at The Loft </p>
                    <p>Establised in 2018, The Loft is an atrisan experience for the refined connoisseur. Enjoy a variety of espresso 
                    beverages and our expertly curated menu in our etherial loft. </p>
                    <br/><br/>To see our menu, click <Link to='/menu'>here</Link>.
                    <br/><br/>Are you interested in catering or ordering to go? If so, click <Link to='/catering'>here</Link>.
                </div>
            </div>
    )
}
export default Home;

