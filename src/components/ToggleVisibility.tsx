import React, { useState } from 'react'
import { Plus } from 'lucide-react';

const ToggleVisibility = ({
  visible = true,
  iconSize = 45,
  children }) => {
  const [show, setShow] = useState(visible)

  return (
    <React.Fragment>
      {show && children}
      <button className="inspo-button-2" onClick={() => setShow(!show)}>
      <Plus size={iconSize}/>
      </button>
    </React.Fragment>
  )
}

export default ToggleVisibility