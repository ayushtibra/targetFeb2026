const ActionItem = ({ list, activeItem, setActiveItem, setDescription, activeUnreadCount }) => {

    const handleItemClick = (option) => {
        setActiveItem(option.text);
        setDescription(null)
    }

    return (
        <div className="w-1/6">
            <h3 className='font-bold'>Outlook</h3>
            <div className="flex flex-col">
                {list.map((item) => (
                    <button
                        key={item.id}
                        className={`text-left border-1 border-black p-1 mb-1 cursor-pointer ${activeItem == item.text && 'font-bold'}`}
                        onClick={() => handleItemClick(item)}>
                        {item.text} 
                        {activeItem == item.text && ` ${ activeUnreadCount || ''}`}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ActionItem;