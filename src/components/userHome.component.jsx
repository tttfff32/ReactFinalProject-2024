import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import Logo from '../assets/logo.jpg'
import Background from '../assets/bride2.jpg'
import flower from '../assets/flower.jpg'
import engagementbouquet from '../assets/בית לבן.jpg'
import head from '../assets/head.jpg'


export const UserHome = () => {

      const  rocketAnimation = useSpring({
            from: { transform: 'translateY(0px)' },
            to: { transform: 'translateY(-50px)' },
            loop: { reverse: true },
        });
        
        return <div>
            <div className='Welcom'>

                <div >
                    <animated.div style={{ ...rocketAnimation, width: '100%', margin: '50px auto', fontSize: '3em' }}>
                    <img src={Background} />
                    <img src={flower} />
                    <img src={head} />
                    <img src={engagementbouquet} />
                    </animated.div> 
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

