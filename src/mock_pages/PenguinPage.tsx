import {useComponentManager} from "../hooks/ComponentManager.tsx";
import UploadBlock from "../components/UploadBlock.tsx";
import TitleBlock from "../components/TitleBlock.tsx";
import TextBlock from "../components/TextBlock.tsx";
import {useEffect, useRef} from "react";
import ImageBlock from "../components/ImageBlock.tsx";
import PaletteBlock from "../components/PaletteBlock.tsx";

function PenguinPage() {

    const {
        components,
        addComponent,
        deleteComponent,
        handlePickUp,
        handleDropOnTile,
        handleDragOver,
        projectData,
    } = useComponentManager();

    const penguin_components = [
        <ImageBlock src={"src/mock_pages/penguin_media/penguin_3.png"} />,
        <ImageBlock src={"src/mock_pages/penguin_media/penguin_2.jpg"} />,
        <TextBlock title="Penguin hat for winter" points={["Perfect for cold weather", "A fun gift idea", "Stylish and cozy accessory"]} />,
        <TextBlock title="Penguin Hat Design Ideas" points={["Add a pom-pom on top", "Use black and white yarn for contrast", "Include a little scarf on the penguin"]} />,
        <TextBlock title="Yarn selection for penguin hat" points={["Black for the hat base", "White for the belly", "Orange for the beak and feet"]} />,
        <ImageBlock src={"src/mock_pages/penguin_media/penguin_4.png"} />,
        <ImageBlock src={"src/mock_pages/penguin_media/penguin_6.png"} />,
        <TextBlock title="Things to finish on the penguin hat" points={["Knit the penguin's beak", "Finish the penguin's wings", "Attach the penguin's eyes"]} />,
        <TextBlock title="Challenges in penguin hat project" points={["Shaping the penguin's body", "Ensuring the beak is proportionate", "Making the hat fit properly"]} />,
        <ImageBlock src={"src/mock_pages/penguin_media/penguin_1.jpg"} />,
        <ImageBlock src={"src/mock_pages/penguin_media/penguin_5.png"} />,
        <TextBlock title="Penguin hat completion goals" points={["Finish the penguin face", "Weave in all loose ends", "Add a warm lining"]} />
    ];

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            penguin_components.forEach(component => {
                addComponent(component);});
        }
    }, [projectData]);

    return (
        <div className="p-7">

            {/* Name of project */}
            <TitleBlock
                title={"Penguin Hat"}
            />

            {/* Upload bar at bottom of screen */}
            <UploadBlock addComponent={addComponent}/>

            {/* Displays blocks currently in play */}
            <div className="inspo-grid">
                {components.length === 0 ? (<p></p>) : (
                    components.map((component, index) => (

                        <div

                            /*drag elements*/
                            draggable
                            key={index}
                            className="relative"
                            style={{ cursor: 'move' }}

                            onDragStart={(e) => handlePickUp(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDropOnTile(e, index)}

                        >

                            {/*delete elements*/}
                            <button className="delete-button" onClick={(e) => {
                                e.stopPropagation();
                                deleteComponent(index); }}>
                                <span className="text-gray-600">×</span>
                            </button>

                            {component}

                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PenguinPage;
