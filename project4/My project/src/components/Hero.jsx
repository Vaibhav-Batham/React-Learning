 import React, { Component } from 'react'
 import image2 from "../assets/image2.jpeg"
 import bg from "../assets/bg.jpeg"
 
 export class Hero extends Component {
   render() {
     return (
       <div className='hero'>
        <img src={image2} alt="" width={500}/>
        <img src={bg} alt="" width={500} />
        
         
       </div>
     )
   }
 }
 
 export default Hero
 