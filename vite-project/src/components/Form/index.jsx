import { useState } from "react"

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
        <form onSubmit={submitData}>
            <input 
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setFormData({ description: event.target.value })}
            />
            <div>
                <input 
                type="text"
                placeholder="Valor"
                onChange={(event) => setFormData({ ...formData, amount: event.target.value })}
                />
                <select 
                name="Tipo do valor" 
                id=""
                onChange={(event) => setFormData({ ...formData, type: event.target.value })}
                >
                    {types.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <button type="submit">Inserir Valor</button>
        </form>
    )
}