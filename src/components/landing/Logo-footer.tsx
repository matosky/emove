import { StyledLogoFooter } from './styles/Logo-footer-styled'
import orange from '../landing/Assets/orange.png';
import road from '../landing/Assets/road-white.png';

const Logo = () => {
  return (
    <StyledLogoFooter>
      <div className="Logo-small">
        <div>
          <img className="Logo-orange-footer" src={orange} alt="Logo" />
        </div>
        <div>
          <img className="Logo-road-footer" src={road} alt="road" />
        </div>
      </div>
    </StyledLogoFooter>
  )
}

export default Logo
