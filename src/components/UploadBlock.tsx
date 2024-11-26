import { ImageUp, LetterText, Palette } from 'lucide-react';
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
          position: "fixed",
          bottom: "0",
          left: "99%",
          transform: "translateX(-100%)",
          zIndex: 9999, //makes sure always on top
          width: "auto",
          height: "auto",
          display: "block",
      }}>
<<<<<<< HEAD
          <ToggleVisibility visible={false}>
            <button className="inspo-button" onClick={() => handleButtonClick('Text')}><LetterText size={iconSize}/></button>
            <button className="inspo-button" onClick={() => handleButtonClick('Image')}><ImageUp size={iconSize}/></button>
            <button className="inspo-button" onClick={() => handleButtonClick('Palette')}><Palette size={iconSize}/></button>
          </ToggleVisibility>      
=======
          <button className="inspo-button" onClick={() => handleButtonClick('Text')}><LetterText size={iconSize}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Image')}><ImageUp size={iconSize}/></button>
          <button className="inspo-button" onClick={() => handleButtonClick('Palette')}><Palette size={iconSize}/></button>
>>>>>>> main
      </div>

  );
};

export default UploadBlock;