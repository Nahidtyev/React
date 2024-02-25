import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo.svg" alt="" />
            <ul className="list">
                <li>H.
                    <ul className='hover-list'>
                        <li> IT Services</li>
                        <li>App Development</li>
                    </ul>
                </li>
                <li>Solutions</li>
                <li>Company</li>
                <li>Case studies</li>
                <li>Blog</li>
                <li>Resources</li>
            </ul>
            <div className="nav-right">
                <p><button>Client support</button><br/>
                1-800-356-8933
                </p>
                <button className='contact'>ContactUs</button>
            </div>
        </div>
        <hr />
    </nav>
  )
}

export default Navbar;