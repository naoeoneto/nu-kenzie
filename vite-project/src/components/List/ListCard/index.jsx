export function ListCard({ transaction, removeTransaction }){
    return (
        <li>
          <h3>{transaction.description}</h3>
          <span>{transaction.type}</span>
          <span>$ {transaction.amount}</span>
          <button onClick={() => removeTransaction(transaction)}>Excluir</button>
        </li>
    )
}