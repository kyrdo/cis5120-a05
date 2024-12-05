import {useComponentManager} from "../hooks/ComponentManager.tsx";
import UploadBlock from "../components/UploadBlock.tsx";
import TitleBlock from "../components/TitleBlock.tsx";
import TextBlock from "../components/TextBlock.tsx";
import {useEffect, useRef} from "react";
import ImageBlock from "../components/ImageBlock.tsx";
import PaletteBlock from "../components/PaletteBlock.tsx";

function ElephantPage() {

    const {
        projectData,
        components,
        addComponent,
        deleteComponent,
        handlePickUp,
        handleDropOnTile,
        handleDragOver,
    } = useComponentManager();

    const elephant_components = [
        <TextBlock title="Next focus areas:" points={["Finish crocheting the legs", "Attach legs to the body", "Begin shaping the head"]} />,
        <ImageBlock src={"src/mock_pages/elephant_media/elephant_2.jpeg"} />,
        <TextBlock title="Upcoming tasks:" points={["Complete the main body section", "Add safety eyes to the head", "Create and attach the tail"]} />,
        <TextBlock title="To-do list for detailing:" points={["Crochet the elephant's ears", "Stitch detailing to the ears", "Attach ears to the head"]} />,
        <ImageBlock src={"src/mock_pages/elephant_media/elephant_3.jpg"} />,
        <TextBlock title="Plan for the face:" points={["Add embroidery details to the trunk", "Attach the trunk to the face", "Stuff and close the head"]} />,
        <TextBlock title="Steps for finishing the limbs:" points={["Start assembling the legs and body", "Finish detailing around the feet", "Secure all seams tightly"]} />,
        <ImageBlock src={"src/mock_pages/elephant_media/elephant_4.jpg"} />,
        <PaletteBlock colors={["#FADADD", "#CCE7FF", "#F4C2C2"]} />,
        <ImageBlock src={"src/mock_pages/elephant_media/elephant_1.jpeg"} />,
        <TextBlock title="Decorative additions checklist:" points={["Design and crochet a decorative blanket for the elephant", "Attach blanket securely to the back", "Add finishing touches to the eyes"]} />,
        <TextBlock title="Final assembly tasks:" points={["Crochet and shape the tusks", "Securely attach tusks to the head", "Final check for loose threads"]} />,
        <ImageBlock src={"src/mock_pages/elephant_media/elephant_5.jpg"} />,
        <TextBlock title="Steps to finalize the body:" points={["Complete crocheting the elephant's trunk", "Sew the ears to the head", "Add stuffing to the body"]} />

    ];

    useEffect(() => {
        for (let i = 0; i < elephant_components.length; i++) {
                addComponent(elephant_components[i]);
        }
    }, [projectData]);

    return (
        <div className="p-7">

            {/* Name of project */}
            <TitleBlock
                title={projectData?.projectName}
            />

            {/* Upload bar at bottom of screen */}
            <UploadBlock addComponent={addComponent}/>

            {/* Displays blocks currently in play */}
            <div className="inspo-grid">
                {components.length === 0 ? (<p></p>) : (
                    components.map(({id, element}, index) => (

                        <div

                            /*drag elements*/
                            draggable
                            key={id}
                            className="relative"
                            style={{ cursor: 'move' }}

                            onDragStart={(e) => handlePickUp(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDropOnTile(e, index)}

                        >

                            {/*delete elements*/}
                            <button className="delete-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteComponent(index); }}>
                                <span className="text-gray-600">×</span>
                            </button>

                            {element}

                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ElephantPage;
