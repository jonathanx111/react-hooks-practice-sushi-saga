import { useState } from 'react';

function AddMoneyForm({ onAddMoney }) {
    const [moneyInput, setMoneyInput] = useState("")

    function handleMoneyFormSubmit(e) {
        e.preventDefault()
        onAddMoney(parseInt(moneyInput, 10))
        setMoneyInput("")
    }
    
    return (
        <form onSubmit={handleMoneyFormSubmit} >
            <label>
                Add Money:
                <input value={moneyInput} onChange={e => setMoneyInput(e.target.value)} type="number" />
            </label>
            <input type="submit" value="Add Money"/>
        </form>
    )
}

export default AddMoneyForm