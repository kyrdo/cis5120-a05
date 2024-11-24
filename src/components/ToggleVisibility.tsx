import React, { useState } from 'react'
import { Plus } from 'lucide-react';

const ToggleVisibility = ({
  visible = true,
  iconSize = 60,
  children }) => {
  const [show, setShow] = useState(visible)

  return (
    <React.Fragment>
      {show && children}
      <button className="inspo-button" onClick={() => setShow(!show)}>
      <Plus size={iconSize} style={{
              color: "#E1DCED",
              backgroundColor: "#5D576B"
          }}/>
      </button>
    </React.Fragment>
  )
}

export default ToggleVisibility