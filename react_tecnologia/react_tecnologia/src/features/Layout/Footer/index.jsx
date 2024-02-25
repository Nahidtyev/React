import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foot-info">
            <div className="image">
              <div>
                <span>REVIEWED ON </span><br />
                <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg" alt="" /> 
                <span>31 REVIEWS</span>
              </div>
            </div>
            <div className='ap'>
              <div className="hr"><hr /></div>
              <p>Seventh Ave, 20th Floor <br />New York, NY 10018 </p>
            </div>
            <div className='ap'>
              <div className="hr"><hr /></div>
              <p>T: 1-800-356-8933 <br />E: office@tecnologia.com </p>
            </div>
            <ul>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
        </div>
        <div className="foot-text">
          <p>© 2023 Tecnologia</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;