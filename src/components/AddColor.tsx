import ColorPicker from "./ColorPicker";
import { Plus } from "lucide-react";

const AddColor = ({ addComponent }): JSX.Element => {
  const iconSize = 20; 
  const handleButtonClick = () => {
    addComponent(<ColorPicker />)
  };

  return (
    <button className="inspo-button" onClick={() => handleButtonClick()}><Plus size={iconSize}/></button>
  )
}

export default AddColor;