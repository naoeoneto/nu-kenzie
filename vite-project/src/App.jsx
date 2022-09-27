import { useState } from "react";
import "./App.css";
import nuKenzieLogo from './assets/nuKenzie.svg'
import illustration from './assets/illustration.svg'
import { Form } from "./components/Form";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filteredItems, setFilteredItems] = useState("")
  const [page, setPage] = useState(true)

  const types = ["entrada", "saída"]
  const filtered = listTransactions.filter(item => filteredItems === "" ? true : item.type === filteredItems)

  function checkPage(){
    page ? setPage(false) : setPage(true)
  }

  function addTransaction(data) {
    setListTransactions([...listTransactions, data]);
  }

  function removeTransaction(item){
    const items = listTransactions.filter(elem => elem != item)
    setListTransactions(items)
  }

  return (
    <div className="App">
      {
        page ? (
        <section>
          <div>
            <figure>
                <img src={nuKenzieLogo} alt="Logo Nu Kenzie" />
            </figure>
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button onClick={checkPage}>Iniciar</button>
          </div>
          <div>
            <figure>
              <img src={illustration} alt="" />
            </figure>
          </div>
      </section>
      ) : (
      <div>
      <header>
        <img src={nuKenzieLogo} alt="Logo Nu Kenzie" />
        <button onClick={checkPage}>Início</button>
      </header>
      <section>
        <Form props={listTransactions} addTransaction={addTransaction} types={types} />
        <TotalMoney list={listTransactions} />
      </section>
      <section>
        <div>
          <h2>Resumo Financeiro</h2>
        </div>
        <List listTransactions={filtered} removeTransaction={removeTransaction} setFilteredItems={setFilteredItems} types={types} />
      </section>
      </div>
  )}
    </div>
  )  
}

export default App;
