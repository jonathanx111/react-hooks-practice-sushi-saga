import React, { useEffect, useState } from "react";
import AddMoneyForm from "./AddMoneyForm";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setShushis] = useState([])
  const [sushisIndex, setSushisIndex] = useState(0)
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(sushisObjects => {
        const updatedSushisObjects = sushisObjects.map(sushi => {
          return {...sushi, eaten: false}
        })
        setShushis(updatedSushisObjects)
      })
  }, [])

  function onAddMoreSushis() {
    if(sushisIndex + 4 < sushis.length - 1) {
      setSushisIndex(() => sushisIndex + 4)
    } else {
      setSushisIndex(0)
    }
  }

  // console.log(sushisIndex)

  function onBuySushi(sushi) {
    if (!sushi.eaten && money >= sushi.price) {
      setMoney(() => money - sushi.price)
      setPlates(plates.includes(sushi) ? [...plates] : [...plates, sushi])
      const afterEatShushiArray = sushis.map(s => {
        if (s.id === sushi.id) return {...sushi, eaten: true} 
        return s
      })
      setShushis(afterEatShushiArray)
    }
  }

  function onAddMoney(newMoneyAmount) {
    setMoney((money) => money = money + newMoneyAmount)
  }

  const visibleSushis = sushis.slice(sushisIndex, sushisIndex + 4)
  
  return (
    <div className="app">
      <SushiContainer sushis={visibleSushis} onAddMoreSushis={onAddMoreSushis} onBuySushi={onBuySushi} />
      <Table money={money} plates={plates} />
      <AddMoneyForm onAddMoney={onAddMoney} />
    </div>
  );
}

export default App;
