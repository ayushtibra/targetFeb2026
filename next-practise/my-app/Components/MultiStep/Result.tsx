import React from 'react';

const Result = ({data}) => {
    return (
        <div>
            {data.name}{data.age}{data.email}
            <p>{data.theme}</p>
        </div>
    );
};

export default Result;