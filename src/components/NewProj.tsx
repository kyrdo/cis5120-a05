import {useComponentManager} from "../hooks/ComponentManager.tsx";
import UploadBlock from "./UploadBlock.tsx";
import TitleBlock from "./TitleBlock.tsx";

function NewProjPage() {

    const {
        components,
        addComponent,
        deleteComponent,
        handlePickUp,
        handleDropOnTile,
        handleDragOver
    } = useComponentManager();

    return (
        <div className="p-7">

            {/* Name of project */}
            <TitleBlock/>

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

export default NewProjPage;
