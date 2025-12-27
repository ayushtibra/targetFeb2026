import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { showItem } from "./constant";
import { usePagination } from "./hooks/usePagination";

const PaginationComponent = () => {
    const [activePage, setActivePage] = useState(0);
    const {products} = usePagination();

    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / showItem)
    const start = activePage * showItem;
    const end = start + showItem

    

    const handleClick = (activePage) => {
        setActivePage(activePage);
    }

    const handleLeftClick = () => {
        setActivePage(prev => prev - 1);
    }

    const handleRightClick = () => {
        setActivePage(prev => prev + 1);
    }

    return (
        <div className="w-full max-w-[1000px] m-auto text-center">
            <h3 className="text-center">Pagination</h3>
            <Pagination
                activePage={activePage}
                noOfPages={noOfPages}
                handleClick={handleClick}
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick}
            />
            <div className="flex flex-wrap justify-center gap-4">
                {products?.slice(start, end)?.map?.((product) => (
                    <ProductCard product={product} />
                ))}
            </div>

        </div>
    )
}

export default PaginationComponent;