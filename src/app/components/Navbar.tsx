import React from 'react'
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
   
       <Image 
        src="/logo.jpg"   
        alt="Company Logo"
        width={200}       
        height={200}     
        priority          
      />
   
     <div>
      <div>Home</div>
      <div>About us</div>
      <div>Our Projects</div>
      <div>Services</div> 
      <div>Career</div>  
      <button>Contact Us</button>
     </div> 
    </div>
  )
}

export default Navbar
