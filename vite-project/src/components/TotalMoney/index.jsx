export function TotalMoney({ list }){
     const myMoney = list.reduce((previous, current) => {
        
        if(current.type == "entrada"){
            return previous + parseFloat(current.amount)
        } 
        
        return previous - parseFloat(current.amount)
    }, 0).toFixed(2)
    
    return (
    <div>
        <p>Valor Total</p>
        <p>$ {myMoney}</p>
    </div>
    )
}