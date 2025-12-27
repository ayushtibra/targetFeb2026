import React from 'react';

const Pagination = ({
    activePage,
    handleLeftClick,
    noOfPages,
    handleClick,
    handleRightClick
}) => {
    return (
        <div className="flex items-center justify-center">
            <button disabled={activePage == 0} className={`border-1 border-white p-3 cursor-pointer`} onClick={handleLeftClick}>←</button>
            <div className="my-4 py-4">
                {[...Array(noOfPages)].map((item, index) => index).map((page) => (
                    <button
                        key={page} className={`border-1 border-white p-3 cursor-pointer ${activePage == page && 'bg-gray-200 text-black'}`}
                        onClick={() => handleClick(page)}>{page}</button>
                ))}
            </div>
            <button disabled={activePage == noOfPages - 1} className={`border-1 border-white p-3 cursor-pointer`} onClick={handleRightClick}>→</button>
        </div>
    );
};

export default Pagination;