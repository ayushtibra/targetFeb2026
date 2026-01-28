import React, { useState } from 'react';
import AccordianItem from './item';

const AccordianComponent = ({ items }) => {
    const [show, setShow] = useState(null);

    return (
        <div className='flex flex-col w-full max-w-[500px] m-auto mt-4'>
            {items.map((item, index) => (
                <AccordianItem
                    key={item.title}
                    item={item}
                    isOpen={show == index}
                    onToggle={() => setShow(show == index ? null : index)}
                />
            ))}
        </div>
    );
};

export default AccordianComponent;