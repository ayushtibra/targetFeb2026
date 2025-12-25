import { useMemo, useState } from "react";
import Card from "./Card";
import { restaurents } from "./Data/restaurents";

const sortOptions = [
    'Rating: High to Low',
    'Name: A to Z',
    'ETA: duration'
];

const FoodOrdering = () => {
    const [filteredTags, setFilteredTag] = useState(null);
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Rating: High to Low');

    const handleSelect = (option) => {
        setSelectedSort(option);
        setIsOpen(false);
    };

    const filteredList = useMemo(() => {
        return restaurents.filter((restaurent) => {
            return restaurent.name.toLowerCase().includes(search.toLowerCase())
        }).filter((restaurent => {
            if(!filteredTags) return true
            return restaurent.tags == filteredTags
        })).sort((a, b) => {
            if (selectedSort.includes('Rating')) {
                return b.rating - a.rating
            } else if (selectedSort.includes('ETA')) {
                return a.ETA - b.ETA
            } else {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            }
        })
    }, [search, selectedSort, filteredTags]);

    return (
        <div className="m-auto max-w-[1000px] p-2 mt-2 sm:p-0">
            <div className="flex flex-col gap-2 justify-center">
                <input
                    className=" block m-auto flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    type='text' placeholder="Search restaurent by name" value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="relative block m-auto mt-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                        <span className="text-gray-700 font-medium">{selectedSort}</span>
                    </button>

                    {isOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsOpen(false)}
                            />
                            <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                                {sortOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelect(option)}
                                        className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors ${selectedSort === option
                                            ? 'bg-blue-50 text-blue-700 font-medium'
                                            : 'text-gray-700'
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className="flex gap-1 m-auto mt-2">
                    {['North Indian', 'Italian', 'South indian', 'Chinease'].map((item) => (
                        <button onClick={() => setFilteredTag(item)} className="cursor-pointer bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all px-2">
                            {item}
                        </button>
                    ))}
                    <button onClick={() => setFilteredTag(null)}>Clear</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-[10px] mt-2 sm:mt-4">
                {filteredList.map((restaurent) => (
                    <Card restaurent={restaurent} />
                ))}
            </div>
        </div>
    )
}

export default FoodOrdering;