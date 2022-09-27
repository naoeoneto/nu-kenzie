import { ListCard } from "./ListCard"
import { ListFilters } from "./ListFilters"

export function List({ listTransactions, removeTransaction, types, setFilteredItems }){
    
  return (
      <ul>
        <ListFilters types={types} setFilteredItems={setFilteredItems} />
        {listTransactions.length ? (
          listTransactions.map((transaction, index) => <ListCard key={index} transaction={transaction} removeTransaction={removeTransaction} setFilteredItems={setFilteredItems} />)
        )
         :
        (
          <h2>Você ainda não possui nenhum lançamento</h2>
        )}    
      </ul>
    )
}