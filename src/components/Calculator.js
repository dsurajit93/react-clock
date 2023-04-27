import React, { useState } from 'react'

const Calculator = () => {
    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState(0)

    const calculate = (e) =>{
        e.preventDefault()
        let a = Number(numOne)
        let b = Number(numTwo)
        console.log(operator)
        switch(operator){
            case '+':
                setResult(a+b)
                break;
            case '-':
                setResult(a-b)
                break;
        }
    }
  return (
    <div>
        <form onSubmit={calculate}>
            <input type="text" value={numOne} onChange={(e)=>setNumOne(e.target.value)} />
            <br /> <br />
            <select  value={operator} onChange={(e)=>setOperator(e.target.value)} >
                <option>select</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <br /> <br />
            <input type="text" value={numTwo} onChange={(e)=>setNumTwo(e.target.value)}  />
            <br /><br />
            <input type="submit" value="=" />
        </form>
        <p>{result}</p>
    </div>
  )
}

export default Calculator