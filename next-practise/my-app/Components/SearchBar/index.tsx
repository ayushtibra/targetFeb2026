import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [resultData, setResultData] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache] = useState({});
    const resultRef = useRef(null);

    // or debouncing another way - 1

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchValue(input); // ✅ debounced update
        }, 400);

        return () => clearTimeout(timer);
    }, [input]);

    // or debouncing another way - 2

    // const [input, setInput] = useState("");
    // const [searchValue, setSearchValue] = useState("");
    // const timerRef = useRef(null);

    // const handleChange = (e) => {
    //     const value = e.target.value;

    //     setInput(value); // ✅ immediate UI update (causes re-render)

    //     clearTimeout(timerRef.current);
    //     timerRef.current = setTimeout(() => {
    //         setSearchValue(value); // ✅ debounced update
    //     }, 1000);
    // };

    useEffect(() => {
        if (searchValue != '') {
            if (cache[searchValue]) {
                console.log('cache returned', searchValue);
                setResultData(cache[searchValue]);
                return;
            }

            const fetchData = async () => {
                console.log('fresh api returned', searchValue);
                const data = await fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`);
                const result = await data.json();
                setResultData(result);
                setCache((prev) => ({ ...prev, [searchValue]: result }))
            }

            fetchData();

        } else {
            setResultData([])
        }

    }, [searchValue])

    return (
        <div className="w-full max-w-[1000px] m-auto text-center">
            <h3>Search Bar</h3>
            {/* <input className="border p-1" type="text" placeholder="Search" value={input} onChange={handleChange} /> */}
            <div className="m-auto w-full max-w-[300px]">
                <input
                    className="w-full border p-1"
                    type="text" placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    onBlur={() => setShowResult(false)} />
                {showResult && resultData?.recipes?.length > 0 && <div ref={resultRef} className="border-1 p-2 h-[300px] overflow-scroll">
                    {resultData?.recipes?.map((item) => (
                        <p className="py-3 text-left">{item.name}</p>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default SearchBar;