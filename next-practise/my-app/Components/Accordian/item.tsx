import React, { useState } from 'react';

const AccordianItem = ({ item, isOpen, onToggle }) => {
    return (
        <div className='mb-2 border'>
            <p className='bg-gray-200 text-black p-2 cursor-pointer' onClick={onToggle}>{item.title}</p>
            {isOpen && <p className='p-2'>{item.content}</p>}
        </div>
    );
};

export default AccordianItem;