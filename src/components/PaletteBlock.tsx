import AddColor from "./AddColor.tsx";
import { useState } from "react";
import "../css/PaletteBlock.css";

const PaletteBlock = ( {colors = [] }) => {

  const [components, setComponents] = useState<JSX.Element[]>(
    colors.map((color, index) => (
      <div
        key={`color-${index}`}
        style={{
          backgroundColor: color,
          width: "100%", // Fill the width of the container
          height: "100px",
          margin: "5px 0", // Adjust margin for better spacing
        }}
      ></div>
    ))
  );

  const addComponent = (component: JSX.Element) => {
    setComponents((prevComponents) => [...prevComponents, component]);
  };

  return (
    <div className="inspo-block palette-block">
      <AddColor addComponent={addComponent} />
      <div>
        {components.length === 0 ? (
          <p></p>
        ) : (
          components.map((component, index) => <div key={index}>{component}</div>)
        )}
      </div>
    </div>
  );
};

export default PaletteBlock;
