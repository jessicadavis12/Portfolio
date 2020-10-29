import React from 'react'
import {Link} from 'react-router-dom'

function Catering(){
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Do you need to place an online order?  Fill out this form and we'll get your order ready!(Note: Please do not use this form to complain about the quality of our food.)</p>
            <forms>
                <label for="fName">First Name:</label><br/><br/>
                <input type="text" id="fName" name="fName" placeholder="first name"/><br/><br/>

                <label for="lName">Last Name:</label><br/><br/>
                <input type="text" id="lName" name="lName" placeholder="last name"/><br/><br/>

                <label for="email">Email:</label><br/><br/>
                <input type="email" id="email" name="email" placeholder="You@email.com"/><br/><br/>

                <label for="fName">Phone Number:</label><br/><br/>
                <input type="text" id="fName" name="fName" placeholder="555-555-5555"/><br/><br/>

                <textarea name="orderForm" rows="10" cols="40">What would you like to order?
                </textarea><br/><br/>

                Would you like a side of hash browns?<br/><br/>

                <input type="radio" name="hashBrowns" value="true" checked/>Yes<br/>
                <input type="radio" name="hashBrowns" value="false"/>No<br/>

                <input type="submit"/>
                </forms>
                
                <br/><br/>To go back to the home page, click <Link to='/'>here</Link>.
        </div>
    )
}
export default Catering