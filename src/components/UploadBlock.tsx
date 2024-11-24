import { ScissorsLineDashed, ImageUp, Plus, LetterText, Link, Palette } from 'lucide-react';
import TextBlock from "./TextBlock.tsx";
import ImageBlock from "./ImageBlock.tsx";
import PaletteBlock from "./PaletteBlock.tsx";

const UploadBlock = ({ addComponent }): JSX.Element => {

 const iconSize = 60

  const handleButtonClick = (action: string) => {

     let newComponent;

     switch (action) {
        case 'Image':
            newComponent = <ImageBlock />;
            break
         case 'Text':
            newComponent = <TextBlock />;
            break
         case 'Palette':
            newComponent = <PaletteBlock />;
            break;
        default:
            return;
    }

    // Call the addComponent function to add the new component to the parent
    addComponent(newComponent);
  };

  return (

      <div className="inspo-block" style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999, //makes sure always on top
          width: "auto",
          height: "auto",
          display: "block",
      }}>
          <button className="inspo-button"><Plus size={iconSize} style={{
              color: "#E1DCED",
              backgroundColor: "#5D576B",
              cursor: "default"
          }}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Text')}><LetterText size={iconSize}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Image')}><ImageUp size={iconSize}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Palette')}><Palette size={iconSize}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Pattern')}><ScissorsLineDashed size={iconSize}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Link')}><Link size={iconSize}/></button>
      </div>

  );
};

export default UploadBlock;