import {useComponentManager} from "../hooks/ComponentManager.tsx";
import UploadBlock from "../components/UploadBlock.tsx";
import TitleBlock from "../components/TitleBlock.tsx";
import TextBlock from "../components/TextBlock.tsx";
import {useEffect} from "react";
import ImageBlock from "../components/ImageBlock.tsx";
import PaletteBlock from "../components/PaletteBlock.tsx";

import owl_1 from '../assets/owl_media/owl_1.jpg';
import owl_2 from '../assets/owl_media/owl_2.jpg';
import owl_3 from '../assets/owl_media/owl_3.jpg';
import owl_5 from '../assets/owl_media/owl_5.jpg';
import owl_6 from '../assets/owl_media/owl_6.jpg';

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
        <ImageBlock src={owl_1} />,
        <TextBlock title="Still to finish:" points={["Complete owl eyes", "Finish owl wings", "Stitch owl beak"]} />,
        <ImageBlock src={owl_2} />,
        <PaletteBlock colors={["#6B4C7A", "#83677B"]} />,
        <TextBlock title="Yarn choices for owl design" points={["Brown for body", "White for eyes", "Yellow for beak"]} />,
        <TextBlock title="Challenges with the owl pattern" points={["Getting the eye shape right", "Finding matching yarn", "Ensuring even stitches"]} />,
        <ImageBlock src={owl_5} />,
        <TextBlock title="Owl-themed project goals" points={["Create a unique gift", "Master owl details", "Experiment with textures"]} />,
        <ImageBlock src={owl_6} />,
        <ImageBlock src={owl_3} />,
        <TextBlock title="Next steps for the project:" points={["Finish body", "Start wings", "Add detailing to eyes"]} />
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

export default OwlPage;
