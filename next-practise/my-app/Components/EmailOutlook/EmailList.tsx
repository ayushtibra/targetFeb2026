import React from 'react';

const EmailList = ({list, activeItem, handleEmailClick, handleSave}) => {
    return (
        <div className='w-2/6'>
            <h3 className='font-bold'>Primary</h3>
            {list.find((item) => item.text == activeItem)?.listEmail.map((item) => (
                <div className={`flex justify-between border-1 border-black p-1 mb-1 ${item.status == 'Unread' ? ' font-bold' : null}`}>
                    <h4 className=' cursor-pointer' onClick={() => handleEmailClick(item.id)} >{item.title}</h4>
                    <button className='cursor-pointer' onClick={() => handleSave(item.id)}>Bookmark</button>
                </div>
            ))}
        </div>
    );
};

export default EmailList;