import "./style.css"

export function ListFilters({ types, setFilteredItems }){
    return (
        <div className="filters">
            <button className="filter__btn" 
            onClick={() => setFilteredItems("")}>todas</button>
            {types.map((type) => (
                <button className="filter__btn" 
                key={type} 
                onClick={() => setFilteredItems(type)}>{type}</button>
            ))}
        </div>
    )
}