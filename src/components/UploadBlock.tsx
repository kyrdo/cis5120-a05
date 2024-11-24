import { ImageUp, LetterText, Palette, ScissorsLineDashed, Link } from 'lucide-react';
import TextBlock from "./TextBlock.tsx";
import ImageBlock from "./ImageBlock.tsx";
import PaletteBlock from "./PaletteBlock.tsx";
import ToggleVisibility from './ToggleVisibility.tsx';

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
          display: "flex",
          position: "fixed",
          bottom: "0",
          left: "99%",
          transform: "translateX(-100%)",
          zIndex: 9999 //makes sure always on top
      }}>
          <ToggleVisibility visible={false}>
            <button className="inspo-button" onClick={() => handleButtonClick('Text')}><LetterText size={iconSize}/></button>
            <button className="inspo-button" onClick={() => handleButtonClick('Image')}><ImageUp size={iconSize}/></button>
            <button className="inspo-button" onClick={() => handleButtonClick('Palette')}><Palette size={iconSize}/></button>
            <button className="inspo-button" onClick={() => handleButtonClick('Pattern')}><ScissorsLineDashed size={iconSize}/></button>
            <button className="inspo-button" onClick={() => handleButtonClick('Link')}><Link size={iconSize}/></button>
          </ToggleVisibility>      
      </div>

  );
};

export default UploadBlock;