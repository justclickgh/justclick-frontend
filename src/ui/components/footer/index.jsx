import logo from '../../../assets/images/logo-2.webp'
import '../../../assets/css/footer.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div >
            <div className =" px-4 bg-light text-center text-md-left mt-5">
          <div className =" container py-5 pl-4 row mt-3 dark-grey-text">
            <div className ="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 className ="text-uppercase ml-5 font-weight-bold">
                <img  width = "30%" src={logo}  alt = "Logo" />
              </h6>
              <hr
                className ="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px' }}
               
              />
              <p></p>
            </div>

            <div className ="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className ="text-uppercase font-weight-bold">Expertise</h6>
              <hr
                className ="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px' }}
              />
              <p>
                <Link  to = "/services/photography" className ="dark-grey-text">
                  Photography
                </Link>
              </p>
              <p>
                <Link  to = "/services/mobile-and-web-developement" className ="dark-grey-text">
                  Mobile App & Web development
                </Link>
              </p>
              <p>
                <Link to = "/services/event-planning" className ="dark-grey-text">
                  Event Planning
                </Link>
              </p>
              <p>
                <Link to = "/services/graphic-design" className ="dark-grey-text">
                  Graphic & UI/UX design
                </Link>
              </p>
            </div>

            <div className ="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className ="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                className ="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px' }}
              />
              <p>
                <Link to = "/contact-us" className ="dark-grey-text">
                  Contacts
                </Link>
              </p>
              <p>
                <Link to = "/about-us" className ="dark-grey-text">
                  About
                </Link>
              </p>
              <p>
                <Link to = "/term-and-conditions" className ="dark-grey-text">
                  Privacy policy
                </Link>
              </p>
              <p>
                <Link to = "/term-and-conditions" className ="dark-grey-text">
                  Terms & Conditions
                </Link>
              </p>
            </div>

            <div className ="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className ="text-uppercase font-weight-bold ml-2">Contact</h6>
              <hr
                className ="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px' }}
              />
              <p>
                <i className ="fas fa-home mr-3"></i>Circle Kokomlemle, Accra
              </p>
              <p>
                <i className ="fas fa-envelope mr-3"></i>justclickgh2020@gmail.com
              </p>
              <p>
                <i className ="fas fa-phone mr-3"></i>+233 (0) 553 271 698
              </p>
              <p>
                <i className ="fas fa-phone mr-3"></i>+233 (0) 278 990 427
              </p>
            </div>
          </div>
        </div>

        <div className ="footer-copyright  text-center text-black-50 py-4 bg-dark">
         <p> © 2020 Copyright:</p>
          <Link to ="/" className ="dark-grey-text" >
            {' '}
            Justclick.com
          </Link>
        </div>
        </div>
    )
}

export default Footer
