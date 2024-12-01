import ColorPicker from "./ColorPicker";
import { Plus } from "lucide-react";
import "../css/AddColor.css";

const AddColor = ({ addComponent }): JSX.Element => {
  const iconSize = 20; 
  const handleButtonClick = () => {
    addComponent(<ColorPicker />)
  };

  return (
    <button className="color-button" onClick={() => handleButtonClick()}>Add Color</button>
  )
}

export default AddColor;