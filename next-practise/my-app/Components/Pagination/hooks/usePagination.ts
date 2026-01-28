import { useEffect, useState } from "react";

export const usePagination = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                'https://dummyjson.com/products?limit=500'
            );
            const result = await data.json();
            setProducts(result?.products);
        };

        fetchData();
    }, []);

    return {
        products
    }
};
