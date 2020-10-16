import React, { Component } from 'react';
class Jobs extends Component {
    render(){
        return(
            <div className = "Steve">
                <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
                <div className = "photo">
                    <img src="https://i.imgur.com/jGiefzD.jpg" alt="Steve Jobs"></img>
                </div>
                <div className="Story">
                    <p>Steve Jobs was the co-founder and CEO of Apple Inc.  He is widly considered to be a brilliant businessman, as well as one of the 
                    greatest tech visionary of our time. </p>
                    <p>The story of his life is nothing short of fascinating.  Afer dropping out of college, he started Apple with his friend <a href="https://en.wikipedia.org/wiki/Steve_Wozniak">Steve Wozniac</a> in 1976
                    at the age of 21.  The Duo gained wealth and fame a year later for the <a href="https://en.wikipedia.org/wiki/Apple_II">Apple II</a> one fo the first hightly sucessful mass produced 
                    personal computers.  This was followed by the very sucessful Macintosh in 1984, ther first mass-produced computer with a GUI
                    (graphical user interface).  After being ousted of Apple in 1985, he went on to oversee the creation of two new companies: NeXT and <a href="https://en.wikipedia.org/wiki/Pixar">Pixar</a>.  
                    With the success of the movie Toy Story, Steve became a billionare.  </p> 
                    <p>In 1997, Steve returned to Apple, Bill Gates and Microsoft dominatd the computer industry, and Apple was on the brink of extincetion.
                    Nonetheless,<a href="https://en.wikipedia.org/wiki/Reality_distortion_field"> Steve was a fantastic salesman</a>, and used his business acumen to slowly bring the company back to profitability.</p>  
                </div>
            </div>
            )
    }
}
export default Jobs;