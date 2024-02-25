import React from 'react'
import './footer.scss'
import Footlist from './Footlist'
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {TfiYoutube} from "react-icons/tfi"
import {ImInstagram} from "react-icons/im"
// import {FaLocationDot} from "react-icons/fa"

const Footer = () => {
  var ListsData1=["Find A Store","Become A Member","Sign Up for Email","Send Us Feedback","Student Discounts"]
  var ListsData2=["Get Help","Order Status","Delivery","Returns","Payment Options","Contact Us On Nike.com Inquiries","Contact Us On All Other Inquiries"]
  var ListsData3=["About Nike","News","Careers","Investors","Sustainability"]
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="foot-first">
            <div className="row">
              <div className="col-xl-9 left">
                <Footlist todos={ListsData1} />
                <Footlist todos={ListsData2} />
                <Footlist todos={ListsData3} />
              </div>
              <div className="col-xl-3 social">
                <AiFillTwitterCircle fontSize={37}/>
                <BsFacebook fontSize={30}/>
                <TfiYoutube fontSize={30}/>
                <ImInstagram fontSize={30}/>
              </div>
            </div>
          </div>
          <div className="foot-last">
            <div className="row">
            <div className='col-xl-6 location'>
              {/* <FaLocationDot fontSize={20}/> */}
              <p>India</p>
              <span>© 2023 Nike, Inc. All Rights Reserved</span>
            </div>
            <ul className="col-xl-6">
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Nike Privacy Policy</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer