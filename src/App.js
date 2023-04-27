// import Hello from './components/Hello'
// import ListDisplay from './components/ListDisplay'
// import Users from './components/Users'

import Calculator from "./components/Calculator"
import Clock from "./components/Clock"
import EventEx from "./components/EventEx"
import StyleCodes from "./components/StyleCodes"
import WorldClock from "./components/WorldClock"

function App(){

  const appFunc = () =>{
    alert("App Function is called")
  }
  return(
    <>
      {/* <h1>Hello World!</h1>
      <Hello name="Jhon" age="20" />
      <Hello name="Sara" age="19" />
      <Hello name="Bill" age="22" />
      <ListDisplay /> */}
      {/* <Users /> */}
      {/* <StyleCodes /> */}
      {/* <EventEx myfunc={appFunc} /> */}
      {/* <WorldClock /> */}

      <Calculator />
    </>
  )
}

export default App