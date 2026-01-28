import AccordianComponent from '@/Components/Accordian';
import React from 'react';

const items = [{
    title: 'Who is Ayush',
    content: 'Ayush is lead developer'
},{
    title: 'What is age of ayush?',
    content: 'my age is 28'
},{
    title: 'what is hobby of ayush',
    content: 'Chess and badminton'
}, 
{
    title: 'what is hobby of ayush',
    content: 'Chess and badminton'
}]

const Accordian = () => {
    return (
        <div>
            <AccordianComponent items={items} />
        </div>
    );
};

export default Accordian;