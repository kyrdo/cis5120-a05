import ColorPicker from "./ColorPicker.tsx";
import AddColor from "./AddColor.tsx";
import { useState } from "react";

const PaletteBlock = () => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  const addComponent = (component: JSX.Element) => {
    setComponents((prevComponents) => [...prevComponents, component]);
  };

  return (
    <div className="inspo-block">
      <AddColor addComponent={addComponent}/>
      <div>
        {components.length === 0 ? (<p></p>) : (
          components.map((component) => (
            <div>
            {component}
            </div>
          ))
        )
        }
      </div>
    </div>   
  );
};

export default PaletteBlock;
