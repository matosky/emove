import { StyledLogo } from './styles/Logo.styled';
import orange from "../landing/Assets/orange.png";
import road from "../landing/Assets/road-white.png";



const Logo = () => {
  return (
    <StyledLogo>
    <div className='Logo-small'>
      <div>
              <img className= "Logo-orange" src={orange} alt="Logo" />
      </div>
      <div>
        <img className= "Logo-road" src={road} alt="road" />
      </div>
    </div>
    </StyledLogo>
  )
}

export default Logo