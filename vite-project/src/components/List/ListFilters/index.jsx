export function ListFilters({ types, setFilteredItems }){
    return (
        <div>
            <button onClick={() => setFilteredItems("")}>Todas</button>
            {types.map((type) => (
                <button key={type} onClick={() => setFilteredItems(type)}>{type}</button>
            ))}
        </div>
    )
}