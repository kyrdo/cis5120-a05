import {useComponentManager} from "../hooks/ComponentManager.tsx";
import UploadBlock from "../components/UploadBlock.tsx";
import TitleBlock from "../components/TitleBlock.tsx";
import TextBlock from "../components/TextBlock.tsx";
import {useEffect, useRef} from "react";
import ImageBlock from "../components/ImageBlock.tsx";
import PaletteBlock from "../components/PaletteBlock.tsx";

function OwlPage() {

    const {
        projectData,
        components,
        addComponent,
        deleteComponent,
        handlePickUp,
        handleDropOnTile,
        handleDragOver,
    } = useComponentManager();

    const owl_components = [
        <TextBlock title="Gift ideas for Owl-themed project" points={["Owl cushion", "Owl keychain", "Owl sweater"]} />,
        <TextBlock title="Still to finish:" points={["Complete owl eyes", "Finish owl wings", "Stitch owl beak"]} />,
        <TextBlock title="Yarn choices for owl design" points={["Brown for body", "White for eyes", "Yellow for beak"]} />,
        <TextBlock title="Challenges with the owl pattern" points={["Getting the eye shape right", "Finding matching yarn", "Ensuring even stitches"]} />,
        <TextBlock title="Owl-themed project goals" points={["Create a unique gift", "Master owl details", "Experiment with textures"]} />,
        <TextBlock title="Next steps for the project:" points={["Finish body", "Start wings", "Add detailing to eyes"]} />,

        // <ImageBlock src={"src/mock_pages/owl_media/owl_2.jpg"} />,
        // <ImageBlock src={"src/mock_pages/owl_media/owl_1.jpg"} />,
        // <PaletteBlock />,
        // <ImageBlock src={"src/mock_pages/owl_media/owl_5.jpg"} />,
        // <ImageBlock src={"src/mock_pages/owl_media/owl_6.jpg"} />,
        // <ImageBlock src={"src/mock_pages/owl_media/owl_3.jpg"} />,
        // <PaletteBlock />,
    ];

    useEffect(() => {
        for (let i = 0; i < owl_components.length; i++) {
                addComponent(owl_components[i]);
        }
        // for (let i = 0; i < 3; i++) {
        //     owl_components.forEach(component => {
        //         addComponent(component);});
        // }
    }, [projectData]);

    return (
        <div className="p-7">

            {/* Name of project */}
            <TitleBlock
                title={"Owl Knit"}
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

export default OwlPage;