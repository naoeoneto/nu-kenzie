import { useState } from "react"
import "./style.css"

export function Form({ addTransaction, types }){
    const [formData, setFormData] = useState({
        description: "",
        type: types[0],
        amount: 0
    })

    function submitData(event){
        event.preventDefault()
        if(formData.description.length && formData.amount){
            addTransaction(formData)
            setFormData({
                description: "",
                type: types[0],
                amount: 0
            })} else {
                alert("Preencha todos os campos")
            }
        }
    
    return (
        <form className="home__form" onSubmit={submitData}>
            <div className="form__description">
                <label className="form__description__title">Descrição</label>
                <input 
                type="text"
                placeholder="Digite aqui sua descrição"
                onChange={(event) => setFormData({ description: event.target.value })}
                value={formData.description}
                />
                <label className="form__description__example">Ex.: Compra de Roupas</label>
            </div>
            <section className="form__money">
                <div className="form__amount">
                <label className="form__amount__title">Valor</label>
                    <input 
                    type="text"
                    placeholder="Valor"
                    onChange={(event) => setFormData({ ...formData, amount: event.target.value })}
                    value={formData.amount}
                    />
                </div>
                <div className="form__type">
                    <label className="form__type__title">Tipo de valor</label>
                    <select 
                    name="Tipo do valor" 
                    id=""
                    onChange={(event) => setFormData({ ...formData, type: event.target.value })}
                    defaultValue={formData.type}
                    >
                        {types.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </section>
            <button className="form__btn" type="submit">Inserir Valor</button>
        </form>
    )
}