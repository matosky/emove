import Logo from './Logo-footer'
import { Styledfooter } from './styles/Landing-Bottom.styled'
import insta from '../landing/Assets/insta.png'
import twitter from '../landing/Assets/twitter.png'
import youTube from '../landing/Assets/youTube.png'

const Footer = () => {
  return (
    <Styledfooter>
      <div className="Landing-footer">
        <div className="footer-container">
          <div className="Logo-footer">
            <Logo />
          </div>
          <h1 className="title-footer">E-Move</h1>
          <div className="row">
            <div className="col">
              <p>About</p>
            </div>
            <div className="col">
              <p>Privacy</p>
            </div>
            <div className="col">
              <p>FAQ</p>
            </div>
          </div>
          <hr />
          <div className="social-bottom">
            <div className="dot">
              <img className="social-icon" src={insta} alt="insta" />
            </div>
            <div className="dot">
              <img className="social-icon" src={twitter} alt="twitter" />
            </div>
            <div className="dot">
              <img className="social-icon" src={youTube} alt="youTube" />
            </div>
          </div>
          <div className="row-bottom">
            <p className="copy-right">All rights reserved ©2023 Adire</p>
            <p className="copy-right">Help@adire.com</p>
          </div>
        </div>
      </div>
    </Styledfooter>
  )
}

export default Footer
