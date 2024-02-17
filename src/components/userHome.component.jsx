import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import Background from '../assets/bride2.jpg'
import flower from '../assets/flower.jpg'
import engagementbouquet from '../assets/בית לבן.jpg'
import head from'../assets/head.jpg'


export const UserHome = () => {

    return <div>
          {/* <div className='header'>
          <img  src={Logo} className='logo'width="300px" height="150px" /><br />
          <Link to={'/'}><button  className='buttonHome'> home</button></Link>
            <Link to={'appointments'}> <button className='buttonHome'> add appointment </button></Link>
            <Link to={'admin'}><button  className='buttonHome'> Admin login</button></Link>

        </div> */}
        <div className='Welcom'>
        <div className='flowers'>
              <img src={Background}/>
                <img src={flower} />
                <img src={head} />
                <img src={engagementbouquet} />

        </div>
      
        <div className='text'>
            <h1>Welcome to ZER4U!</h1><br />

  <p>At ZER4U, we specialize in creating breathtaking flower arrangements for any occasion. Whether you need a vibrant bouquet for a birthday celebration or an elegant display for a wedding, our expert florists carefully create each bouquet with precision and rigor to ensure top-notch quality.

Our user-friendly online platform allows customers to effortlessly explore our diverse range of seasonal flowers, select their favorite bouquet and place an order with a few simple clicks. We provide express same-day delivery for orders placed before 1pm, ensuring your flowers arrive fresh and on time to spread joy.</p><br />

<p className='contant'>For any questions or special requests, our dedicated customer service team can be contacted<br /> by  phone at:  03-3333344 <br />or by email at:  info@zer4u.com. <br />Whether you need help choosing the perfect wreath or need help with shipping, the team Our friendly is always ready to assist you.
</p><br />
        </div>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}

