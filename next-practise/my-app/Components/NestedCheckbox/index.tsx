import { useEffect, useState } from "react";
import Checkbox from "./checkbox";

const initialData = [
    {
        name: 'Parent',
        id: 100,
        checked: false,
        nestedChild: [
            {
                name: 'Parent1',
                id: 1,
                checked: false,
                nestedChild: [
                    {
                        name: 'Child1',
                        id: 3,
                        checked: false,
                        nestedChild: []
                    },
                    {
                        name: 'Child2',
                        id: 4,
                        checked: false,
                        nestedChild: [{
                            name: 'Child3',
                            id: 5,
                            checked: false,
                            nestedChild: [{
                                name: 'Child4',
                                id: 6,
                                checked: false,
                                nestedChild: []
                            }]
                        }]
                    }
                ]
            },
            {
                name: 'Parent2',
                id: 2,
                checked: false,
                nestedChild: []
            },
            {
                name: 'Parent3',
                id: 7,
                checked: false,
                nestedChild: []
            }
        ]
    }
]



const NestedChecked = () => {
    const [data, setData] = useState(initialData);

    return (
        <div>
            {data?.map((item) => (
                <Checkbox key={item.id} item={item} setData={setData} />
            ))}
        </div>
    )
}

export default NestedChecked;