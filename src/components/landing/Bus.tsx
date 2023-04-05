import React from 'react'
import { StyledBus } from './styles/Bus.styled'
import bus from "../landing/Assets/bus.png"


const Bus = () => {
  return (
    <StyledBus>
    <div>
      <img  className='bus-container' src={bus} alt="bus" />
    </div>
    </StyledBus>
  )
}

export default Bus