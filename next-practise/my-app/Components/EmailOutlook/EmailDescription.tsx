import React from 'react';

const EmailDescription = ({ description = null }) => {
    return (
        <div className='w-3/6'>
            <h3 className='font-bold'>Descritpion</h3>
            {description ? (
                <div>
                    {description}
                </div>
            ) : (
                <div>
                    Click on email to get full description
                </div>
            )}
        </div>
    );
};

export default EmailDescription;