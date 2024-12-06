import ColorPicker from "./ColorPicker";
import "../css/AddColor.css";

const AddColor = ({ addComponent }): JSX.Element => {
  const handleButtonClick = () => {
    addComponent(<ColorPicker />)
  };

  return (
    <button className="color-button" onClick={() => handleButtonClick()}>Add Color</button>
  )
}

export default AddColor;