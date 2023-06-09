import { useState } from "react";
import "./reset.css"
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
      {page ? (
        <section className="landing__page">
          <div className="landing__page__card">
            <figure>
                <img src={nuKenzieLogo} alt="Logo Nu Kenzie" />
            </figure>
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button className="enter__btn" 
            onClick={checkPage}>Iniciar</button>
          </div>
          <div className="landing__page__img">
            <figure>
              <img src={illustration} alt="" />
            </figure>
          </div>
      </section>
      ) : (
      <div>
      <header>
        <img src={nuKenzieLogo} alt="Logo Nu Kenzie" />
        <button className="header__btn" 
        onClick={checkPage}>Início</button>
      </header>
      <article className="home__page">
        <section className="home__info">
          <Form props={listTransactions} 
          addTransaction={addTransaction} 
          types={types} />
          <TotalMoney list={listTransactions} />
        </section>
        <section className="home__table">
          <List className="home__cards" 
          listTransactions={filtered} 
          removeTransaction={removeTransaction} 
          setFilteredItems={setFilteredItems} 
          types={types} />
        </section>
      </article>
      </div>
  )}
    </div>
  )  
}

export default App;
