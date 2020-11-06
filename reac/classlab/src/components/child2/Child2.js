import React from 'react'
import styles from './child2.module.css'

// const divStyle = {
//     border: 'solid red 5px',
// }
// const pStyle = { color: 'red' }
class Child2 extends React.Component{
    render(){
        return (
            <div className={styles.divStyles}>
             <p className={styles.pStyles}>I am the Child 2 component</p>
        </div>
        )
    }
}
  


export default Child2;
