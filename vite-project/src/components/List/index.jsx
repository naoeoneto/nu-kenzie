import "./style.css"
import { ListCard } from "./ListCard"
import { ListFilters } from "./ListFilters"

export function List({ listTransactions, removeTransaction, types, setFilteredItems }){
    
  return (
    <>
      <div className="home__bar">
        <h2 className="bar__title">Resumo Financeiro</h2>
        <ListFilters types={types} 
        setFilteredItems={setFilteredItems} />
      </div>
      <ul className="home__cards">
        {listTransactions.length ? (
          listTransactions.map((transaction, index) => 
            <ListCard key={index} 
            transaction={transaction} 
            removeTransaction={removeTransaction} 
            setFilteredItems={setFilteredItems} />)
        )
         :
        (
          <h2 className="no__cards">Você ainda não possui nenhum lançamento</h2>
        )}    
      </ul>
    </>
    )
}