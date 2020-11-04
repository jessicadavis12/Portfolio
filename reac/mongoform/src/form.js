import React, { Components } from 'react';

class Nform extends Components{
    render (){
        return(
            <form>
                <label>
                    First Name:
                    <input type="text"/>
                </label>
                <label>
                    Last Name:
                    <input type="text"/>
                </label>
                <input>
                    Email:
                    <input type="text"/>
                </input>
                <input>
                    Phone:
                    <input type="number"/>
                </input>
                <input>
                    Message:
                    <input type="textarea"/>
                </input>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Nform