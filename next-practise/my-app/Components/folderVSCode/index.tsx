import React, { useState } from 'react';
import Folders from './Folders';

const folderStructure = [{
    id: 1,
    name: 'public',
    isFolder : true,
    children : []
},{
    id: 2,
    name: 'src',
    isFolder: true,
    children: [{
        id: 3,
        name: 'components',
        isFolder: true,
        children: [{
            id: 6,
            name: 'data.json',
            isFolder: false
        }]
    },{
        id: 4,
        name: 'index.html',
        isFolder: false
    }]
},{
    id: 5,
    name: 'package.json',
    isFolder: false
}]

const FolderExplorer = () => {
    const [fileExplore, setFilExplorer] = useState(folderStructure);
    const [active, setActive] = useState({
        activeId: null,
    });

    const handleFolderAdd = () => {
        const updateTree = (folders) => {
            return folders?.map((folder) => {
                if(folder.id == active.activeId && folder?.isFolder){
                    return {
                        ...folder, 
                        children: [...folder.children, {
                        id: Date.now(),
                        name: 'Ayush',
                        isFolder: true,
                        children: []
                    }]}
                }

               return {
                        ...folder,
                        children: updateTree(folder.children)
                    }
                
            })
        }
        setFilExplorer((prev) => updateTree(prev))
    }

    const handleFileAdd = () => {
        const updateTree = (folders) => {
            return folders?.map((folder) => {
                if(folder.id == active.activeId){
                    return {
                        ...folder, 
                        children: [...folder.children, {
                        id: Date.now(),
                        name: 'deepika.ts',
                        isFolder: false
                    }]}
                }

               return {
                        ...folder,
                        children: updateTree(folder.children)
                    }
                
            })
        }
        setFilExplorer((prev) => updateTree(prev))
    }

    const handleRemove = () => {
        const updateTree = (folders) => {
            return folders?.filter((folder) => folder.id !== active.activeId).map(folder => ({
                ...folder,
                children: updateTree(folder.children)
            }))
        }

        setFilExplorer((prev) => updateTree(prev))
    }


    return (
        <>
            <div className='mb-2 ml-4 flex gap-2'>
                <h3>Explorer</h3>
                <button className='cursor-pointer' onClick={handleFolderAdd}>📁₊</button>
                <button className='cursor-pointer' onClick={handleFileAdd}>📄₊</button>
                <button className='cursor-pointer' onClick={handleRemove}>⤫</button>
            </div>
            {fileExplore?.map((folder, index) => (
                <Folders key={folder.id} folder={folder} active={active} setActive={setActive} />
            ))}
        </>
    );
};

export default FolderExplorer;