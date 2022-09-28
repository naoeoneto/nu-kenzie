import { FaTrash } from "react-icons/fa"
import "./style.css"

export function ListCard({ transaction, removeTransaction }){
    return (
        <li className="card">
          <section className="card__info">
            <div>
              <h3 className="card__description">{transaction.description}</h3>
              <span className="card__type">{transaction.type}</span>
            </div>
            <span className="card__amount">R$ {transaction.amount}</span>
          </section>
          <FaTrash className="remove__btn" onClick={() => removeTransaction(transaction)} />
        </li>
    )
}