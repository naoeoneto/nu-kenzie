import "./style.css"

export function TotalMoney({ list }){
     const myMoney = list.reduce((previous, current) => {
        
        if(current.type == "entrada"){
            return previous + parseFloat(current.amount)
        } 
        
        return previous - parseFloat(current.amount)
    }, 0).toFixed(2)
    
    return (
    <div className="home__total">
        <div className="home__total__info">
            <p className="total__text">Valor Total</p>
            <p className="total__number">$ {myMoney}</p>
        </div>
        <p className="total__info">O valor se refere ao saldo</p>
    </div>
    )
}