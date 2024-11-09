import { useState } from 'react';

export const useComponentManager = () => {

    const [components, setComponents] = useState<JSX.Element[]>([]);

    const addComponent = (component: JSX.Element) => {
        setComponents((prevComponents) => [...prevComponents, component]);
    };

    const deleteComponent = (indexToDelete: number) => {
        setComponents((prevComponents) =>
            prevComponents.filter((_, index) => index !== indexToDelete)
        );
    };

    const handlePickUp = (e: React.DragEvent, index: number) => {
        e.dataTransfer.setData('draggedIndex', index.toString());
    };

    const handleDropOnTile = (e: React.DragEvent, targetIndex: number) => {
        const draggedIndex = e.dataTransfer.getData('draggedIndex');
        const draggedComponent = components[parseInt(draggedIndex)];
        const remainingComponents = components.filter((_, index) => index !== parseInt(draggedIndex));
        const newComponents = [
            ...remainingComponents.slice(0, targetIndex),
            draggedComponent,
            ...remainingComponents.slice(targetIndex)
        ];
        setComponents(newComponents);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    return {
        components,
        addComponent,
        deleteComponent,
        handlePickUp,
        handleDropOnTile,
        handleDragOver,
    };
};
