import React from 'react';

const Checkbox = ({ item, setData }) => {
    const updateChildren = (nodes, checked) => {
        return nodes.map(node => ({
            ...node,
            checked,
            nestedChild: updateChildren(node.nestedChild, checked)
        }));
    };



    const updateTree = (nodes, targetId, checked) => {
        return nodes.map(node => {
            // 1️⃣ If this is the clicked node
            if (node.id === targetId) {
                return {
                    ...node,
                    checked,
                    nestedChild: updateChildren(node.nestedChild, checked) // Forces all descendants to match the clicked checkbox
                };
            }

            // 2️⃣ Update children first
            const updatedChildren = updateTree(
                node.nestedChild,
                targetId,
                checked
            );

            // 3️⃣ ONLY recalculate parent if it has children
            if (updatedChildren.length > 0) {
                const allChildrenChecked = updatedChildren.every(
                    child => child.checked
                );

                return {
                    ...node,
                    checked: allChildrenChecked,
                    nestedChild: updatedChildren
                };
            }

            // 4️⃣ Leaf node → DO NOT TOUCH checked
            return {
                ...node,
                nestedChild: updatedChildren
            };

        });
    };

    const handleChange = (e, id) => {
        const checked = e.target.checked;

        setData(prev =>
            updateTree(prev, id, checked)
        );
    };


    return (
        <div className='ml-4'>
            <div>
                <input type='checkbox' checked={item.checked} onChange={(e) => handleChange(e, item.id)} />
                <span className='pl-1'>{item.name}</span>
            </div>

            {item?.nestedChild?.map((item, index) => (
                <Checkbox key={index} item={item} setData={setData} />
            ))}
        </div>
    );
};

export default Checkbox;