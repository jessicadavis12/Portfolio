import React from 'react';
import {Link} from 'react-router-dom'
import './menu.css'

import Crepes from '../assets/images/crepes.png'
import FruitTart from '../assets/images/fruittart.png'
import Eggs from '../assets/images/eggs.png'
import Char from '../assets/images/char.png'
import Latte from '../assets/images/latte.png'


function Menu() {
    return ( 
        <div>
            <h1>The Menu</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Crepes} alt="Crepes"></img>
                         <div class="carousel-caption d-none d-md-block">
                            <h5>Crepes</h5>
                            <p>Light and delicious Crepes served with seaonal fruit</p>
                        </div>    
                    </div>
                    <div class="carousel-item">
                        <img src={FruitTart} alt="Fruit Tarts"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fruit Tart</h5>
                            <p>Buttery crust filled with a rich vanilla custard topped with seasonal fruit</p>
                        </div>
                    </div>
                    <div class="carousel-item"> 
                        <img src={Eggs} alt="Eggs"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Loft Breakfast Special</h5>
                            <p>In cafe crafted breads, eggs any style, fried potatos and Latte</p>
                        </div>
                    </div>
                    <div class="carousel-item"> 
                    <img src={Char} alt="Charcuterie"></img> 
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Charcuterie</h5> 
                            <p>Assorted Cafe treats.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Latte} alt="Latte"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Latte</h5>
                            <p>Served hot or cold</p>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>    
            </div> 
                <br/><br/>To go back to the home page, click <Link to='/'>here</Link>.
            <br/><br/>Are you interested in catering or ordering to go? If so, click <Link to='/catering'>here</Link>.
        </div>
    )
}
export default Menu;