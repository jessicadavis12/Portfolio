import React from 'react'
import Child1 from './components/child1/Child'
import Child2 from './components/child2/Child2'
import Child3 from './components/child3/Child3'
import Child4 from './components/child4/Child4'
import './App.css'



class Parent extends React.Component{
render(){
    return(
        <div>
            <div className="card card--purple">
                <p className="card__title card__title--lg">I am the Parent component</p>
            </div>
            <Child1 />
            <Child2 />
            <Child3 />
            <Child4 />
         </div>
    )
}
} 
    
export default Parent;