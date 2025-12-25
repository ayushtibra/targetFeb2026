const Card = ({ restaurent }) => {
    return (
        <div className="bg-white border-1 border-black w-full sm:max-w-[200px]">
            <img src={restaurent.image} />
            <div className="p-3">
                <div className="flex justify-between">
                    <h3 className="font-bold">{restaurent.name}</h3>
                    <span>{restaurent.rating}</span>
                </div>
                <div className="flex justify-between">
                    <h3>{restaurent.ETA} min</h3>
                    <span>{restaurent.tags}</span>
                </div>
                <p>{restaurent.Menu}</p>
            </div>
        </div>
    )
}

export default Card;