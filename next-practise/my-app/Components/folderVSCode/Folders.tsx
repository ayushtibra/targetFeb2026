import React, { useState } from 'react';

const Folders = ({ active, folder, setActive }) => {
    const [showChildren, setShowChildren] = useState(false);
    const handleFolderClick = (item) => {
        setShowChildren(!showChildren)
        setActive({
            activeId: item.id
        });
    }

    return (
        <>
            <div className='ml-4' key={folder.folderId}>
                {folder?.name && <p
                    className={`${folder?.id == active?.activeId && 'active bg-gray-200'} cursor-pointer`}
                    onClick={() => handleFolderClick(folder)}>
                    {folder.isFolder ? `${showChildren ? '˅' : '˃'}  📁`: '📄'}{folder.name}
                </p>}

                {showChildren && folder?.children?.map((item) => (
                    <Folders key={item.id} folder={item} active={active} setActive={setActive} />
                ))}
            </div>
        </>
    );
};

export default Folders;