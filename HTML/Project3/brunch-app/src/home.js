import React, {components} from 'react';


function Home (props){
    return(
        <div className="home">
                <h1>The Brunch Bunch</h1>
                <div className="home-img">
                    <img src='./public/home.png' alt="cafe"/>
                </div>
                <div className="home-content">
                    <p>Artisan Breakfast at The Cafe </p>
                    <p>Establised in 2002, The Cafe is an atrisan experience for the refined connoisseur. Enjoy a variety of espresso 
                    beverages and our expertly curated menu in our etherial loft. </p>
                </div>
            </div>
    )
}

function Menu (props){
    return(
        <div className="menu">
            <h1>Brunch</h1>
            
        </div>
    )
}


class SinglePage extends Component{

    render(){
        return(
            <Home/>
        )
    }
}