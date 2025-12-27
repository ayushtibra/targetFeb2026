import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div key={product.id} className="bg-white p-2 pb-4">
            <img src={product.thumbnail} />
            <h4 className="text-black">{product?.title}</h4>
        </div>
    );
};

export default ProductCard;